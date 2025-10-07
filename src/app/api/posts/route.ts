import {NextRequest, NextResponse} from "next/server";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import {searchHomePosts} from "@/app/(landing)/posts/_lib/post.queries";
import {sleep} from "@/lib/sleep";

export async function GET(req: NextRequest) {
    console.log(`❤️ API Route: GET /api/posts ${req.nextUrl.searchParams.toString()}`);

    await sleep(5000);

    const postSearchParams = postSearch.load(req);
    const {items, total} = await searchHomePosts(postSearchParams);

    return NextResponse.json({
        data: items,
        total: total,
        params: req.nextUrl.searchParams.toString()
    });
}
