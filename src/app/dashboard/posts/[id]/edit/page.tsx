import {SignInButton} from '@clerk/nextjs'
import {auth} from '@clerk/nextjs/server'
import PageHeader from "@/app/dashboard/_components/layout/page-header";
import {PageContainer} from "@/app/dashboard/_components/layout/page-container";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import UpdatePostForm from "@/app/dashboard/posts/_components/update-post-form";
import {postService} from "@/app/dashboard/posts/_lib/post.service";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import UpdatePostContentForm from "@/app/dashboard/posts/_components/update-post-content-form";
import UpdatePostSeoForm from "@/app/dashboard/posts/_components/update-post-seo-form";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Page(props: {
    params: Promise<{ id: string }>
}) {
    const {userId} = await auth();

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

    const params = await props.params;
    const postId = Number(params.id);
    const postDto = await postService.getPostById(postId);

    if (!postDto) {
        return (
            <div className="mx-auto mt-8 flex min-h-screen max-w-2xl flex-col">
                <div>No post found.</div>
            </div>
        )
    }

    return (
        <PageContainer>
            <PageHeader
                title="Update Post"
                actions={
                    <Button asChild>
                        <Link href={`/posts/${postDto.slug}`} target="_blank">View Post</Link>
                    </Button>
                }
            />
            <Tabs defaultValue="general">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Information</CardTitle>
                            <CardDescription>Please fill out your details below</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UpdatePostForm post={postDto}/>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="content">
                    <Card>
                        <CardHeader>
                            <CardTitle>Post Content</CardTitle>
                            <CardDescription>Please fill out your details below</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UpdatePostContentForm post={postDto}/>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="seo">
                    <Card>
                        <CardHeader>
                            <CardTitle>SEO Information</CardTitle>
                            <CardDescription>Please fill out your details below</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UpdatePostSeoForm post={postDto}/>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </PageContainer>
    )
}