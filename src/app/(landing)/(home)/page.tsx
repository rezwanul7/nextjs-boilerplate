import type {Metadata} from "next";
import {SearchParams} from "nuqs/server";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import PostList2 from "@/app/(landing)/posts/_components/post-list-2";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {fetchPosts} from "@/app/(landing)/posts/_lib/post.api.client";
import {getQueryClient} from "@/lib/tanstack-query-client";

export const metadata: Metadata = {
    title: 'HomePage'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;

    // 1. Get the initial post data (SSR)
    const queryString = postSearch.serialize(searchParams);
    console.log("server- queryString", queryString);

    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["posts", queryString],
        queryFn: () => fetchPosts(queryString),
    })

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {/*<HeroSection/>*/}
                <PostList2
                    // posts={items} total={total}
                />
            </HydrationBoundary>

        </div>
    )
}