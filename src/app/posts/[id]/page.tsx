import prisma from '@/lib/prisma'

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
    })

    if (!post) {
        return (
            <div className="mx-auto mt-8 flex min-h-screen max-w-2xl flex-col">
                <div>No post found.</div>
            </div>
        )
    }

    return (
        <div className="mx-auto mt-8 flex min-h-screen max-w-2xl flex-col">
            {post && (
                <article className="w-full max-w-2xl">
                    <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">{post.title}</h1>
                    <p className="text-sm sm:text-base">by {post.authorId}</p>
                    <div className="prose prose-gray prose-sm sm:prose-base lg:prose-lg mt-4 sm:mt-8">
                        {post.content || 'No content available.'}
                    </div>
                </article>
            )}
        </div>
    )
}