import Link from 'next/link'
import prisma from '@/lib/prisma'
import {samplePosts} from "@/app/(landing)/_data/data";
import PostsList from "@/app/(landing)/_components/posts/posts-list";

export default async function Page() {
    const posts = await prisma.post.findMany() // Query the `PostDto` model for all posts

    return (
        <>
            <PostsList />
            <div className="mx-auto mt-8 flex min-h-screen max-w-2xl flex-col">
                <h1 className="mb-8 text-4xl font-bold">Posts</h1>

                <div className="mb-8 flex max-w-2xl flex-col space-y-4">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/src/app/dashboard/posts/${post.id}`}
                            className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col rounded-lg px-2 py-4 transition-all hover:underline"
                        >
                            <span className="text-lg font-semibold">{post.title}</span>
                            <span className="text-sm">by {post.authorId}</span>
                        </Link>
                    ))}
                </div>

                <Link
                    href="/dashboard/posts/create"
                    className="inline-block rounded-lg border-2 border-current px-4 py-2 text-current transition-all hover:scale-[0.98]"
                >
                    Create New Post
                </Link>
            </div>
        </>
    )
}