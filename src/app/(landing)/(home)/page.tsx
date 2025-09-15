import type {Metadata} from "next";
import {SearchParams} from "nuqs/server";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import {HeroSection} from "@/app/(landing)/(home)/_components/hero-section";
import {getPostById, searchHomePosts} from "@/app/(landing)/posts/_lib/post.queries";
import PostsList from "@/app/(landing)/posts/_components/posts-list";
import {CategoriesSection} from "@/app/(landing)/(home)/_components/categories-section";
import {AboutSection} from "@/app/(landing)/(home)/_components/about-section";

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
        console.log(`SearchParams has postId: ${postId}`);
        // redirect to /posts/[postId]
    }

    const postSearchParams = postSearch.cache.parse(searchParams);

    // 1. Get the posts for the sidebar (SSR)
    const {items, total} = await searchHomePosts(postSearchParams);
    if (!postId && items.length > 0) {
        console.log(`No postId in query, defaulting to first post id ${items[0].id}`);
        postId = items[0].id;
    }

    // 2. Get the initial post data (SSR)
    console.log("home/page: postId", postId);

    const post = postId ? await getPostById(postId) : null;

    return (
        <div
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <HeroSection total={total}/>

            <PostsList
                posts={items}
                total={total}
                initialPostId={postId}
                initialPost={post}
            />

            <CategoriesSection/>
            <AboutSection/>
        </div>
    )
}