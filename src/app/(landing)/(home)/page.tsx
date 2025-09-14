import type {Metadata} from "next";
import {SearchParams} from "nuqs/server";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import {HeroSection} from "@/app/(landing)/(home)/_components/hero-section";
import {getPostById, searchHomePosts} from "@/app/(landing)/posts/_lib/post.queries";
import PostsLists from "@/app/(landing)/posts/_components/posts-lists";
import {CategoriesSection} from "@/app/(landing)/(home)/_components/categories-section";
import {AboutPage} from "@/app/(landing)/(home)/_components/about-section";

export const metadata: Metadata = {
    title: 'HomePage'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;

    let postId = Number(searchParams.postId);

    if (postId) {
        // redirect to /posts/[postId]
        console.log("page.tsx: postId from searchParams", postId);
    }

    const postSearchParams = postSearch.cache.parse(searchParams);

    // throw new Error("Post not found");

    // 1. Get the posts for the sidebar (SSR)
    const {items, total} = await searchHomePosts(postSearchParams);
    if (!postId && items.length > 0) postId = items[0].id;

    // 2. Get the initial post data (SSR)
    console.log("\n-------------------------------------------\n");
    console.log("home/page: postId", postId);
    const post = await getPostById(postId);
    if (!post) {
        throw new Error("Post not found");
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <HeroSection total={total}/>
            {/*<SearchSection/>*/}

                <PostsLists
                    posts={items}
                    total={total}
                    initialPostId={postId}
                    initialPost={post}
                />

            <CategoriesSection/>
            <AboutPage/>
        </div>
    )
}