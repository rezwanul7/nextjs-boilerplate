import {SignInButton} from '@clerk/nextjs'
import {auth} from '@clerk/nextjs/server'
import PageHeader from "@/app/dashboard/_components/layout/page-header";
import {PageContainer} from "@/app/dashboard/_components/layout/page-container";
import CreatePostForm from "@/app/dashboard/posts/_components/create-post-form";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default async function NewPost() {
    const {userId} = await auth()

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


    return (
        <PageContainer>
            <PageHeader
                title="Create New Post"
            />
            <Card>
                <CardHeader>
                    <CardTitle>Post Information</CardTitle>
                    <CardDescription>Please fill out your details below</CardDescription>
                </CardHeader>
                <CardContent>
                    <CreatePostForm/>
                </CardContent>
            </Card>
        </PageContainer>
    )
}