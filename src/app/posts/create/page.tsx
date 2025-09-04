import Form from 'next/form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'

export default async function NewPost() {
    const { userId } = await auth()

    // Protect this page from unauthenticated users
    if (!userId) {
        return (
            <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4">
                <p>You must be signed in to create a post.</p>
                <SignInButton>
                    <button
                        type="submit"
                        className="inline-block cursor-pointer rounded-lg border-2 border-current px-4 py-2 text-current transition-all hover:scale-[0.98]"
                    >
                        Sign in
                    </button>
                </SignInButton>
            </div>
        )
    }

    async function createPost(formData: FormData) {
        'use server'

        // Type check
        if (!userId) return

        const title = formData.get('title') as string
        const content = formData.get('content') as string

        await prisma.post.create({
            data: {
                title,
                content,
                authorId: userId,
            },
        })

        revalidatePath('/')
        redirect('/')
    }

    return (
        <div className="mx-auto max-w-2xl p-4">
            <h1 className="mb-6 text-2xl font-bold">Create New Post</h1>
            <Form action={createPost} className="space-y-6">
                <div>
                    <label htmlFor="title" className="mb-2 block text-lg">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter your post title"
                        className="w-full rounded-lg border px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="mb-2 block text-lg">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Write your post content here..."
                        rows={6}
                        className="w-full rounded-lg border px-4 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-block w-full rounded-lg border-2 border-current px-4 py-2 text-current transition-all hover:scale-[0.98]"
                >
                    Create Post
                </button>
            </Form>
        </div>
    )
}