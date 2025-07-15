import {NextResponse} from "next/server";
import axios from "axios";

export async function GET(req: Request) {
    // const user = (await getCurrentUser()) as any;
    // if (!user || !user.id) {
    //     return new NextResponse('Unauthorized', {status: 401});
    // }

    // Extract the code and state from the query parameters
    const {searchParams} = new URL(req.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (!code) {
        return NextResponse.json({error: 'Missing code'}, {status: 400});
    }

    const str = `${process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID}:${process.env.NEXT_PUBLIC_REDDIT_CLIENT_SECRET}`;
    console.log(str);

    const auth = Buffer.from(str).toString("base64")
    console.log('Reddit auth header:', auth);

    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI!,
    });

    console.log('Reddit auth body:', body.toString());

    try {
        const tokenRes = await axios.post(
            'https://www.reddit.com/api/v1/access_token',
            body.toString(),
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'User-Agent': 'marsad',
                },
                // timeout: 10000, // optional: 10 second timeout
            }
        );

        // Access token data
        const tokenData = tokenRes.data;

        console.log(tokenData)

        if (!tokenData.access_token) {
            return NextResponse.json({
                error: 'Failed to get access token from tokenData',
                details: tokenData
            }, {status: 500});
        }

        const {access_token, refresh_token, expires_in} = tokenData;

        // // 💾 Save to DB
        // const userId = user.id;
        // await saveRedditAuthForUser(user.id, {
        //     accessToken: access_token,
        //     refreshToken: refresh_token,
        //     expiresAt: Date.now() + expires_in * 1000,
        // });
        //
        // return NextResponse.redirect(new URL('/settings?reddit=connected', req.url));

        return NextResponse.json({
                message: "Reddit connected successfully",
                access_token,
                refresh_token,
                expires_in,
            }, {status: 200}
        )

    } catch (err: any) {
        console.error('Reddit token error:', err.response?.data || err.message);

        if (err.response) {
            // Reddit responded with error status code
            console.error('❌ Reddit token exchange failed:');
            console.error('Status:', err.response.status);
            console.error('Headers:', err.response.headers);
            console.error('Body:', err.response.data);
        } else if (err.request) {
            // No response from Reddit
            console.error('❌ No response received from Reddit');
            console.error(err.request);
        } else {
            // Something else went wrong
            console.error('❌ Request error:', err.message);
        }
    }

    return NextResponse.json({error: 'Failed to fetch access token'}, {status: 500});
}
