import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(
    _: NextRequest,
    {params}: { params: Promise<{ id: string }> },) {
    const postId = Number((await params).id);

    console.log("api:post invoked with ID:", postId);
    const post = await prisma.post.findUnique({where: {id: postId}});

    if (!post) {
        return NextResponse.json({error: "Not found"}, {status: 404});
    }

    return NextResponse.json(post, {
        headers: {
            "Cache-Control": "s-maxage=60", // (optionally) cache 60s at the edge
        },
    });
}
