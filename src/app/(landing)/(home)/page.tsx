import {SearchParams} from "nuqs/server";
import {GetPostsSearchParamsDto, postSearch} from "@/app/dashboard/posts/_lib/post.search";
import PostListWrapper from "@/app/(landing)/posts/_components/post-list-wrapper";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {fetchPosts} from "@/app/(landing)/posts/_lib/post.api.client";
import {getQueryClient} from "@/lib/tanstack-query-client";

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParamsRaw = await props.searchParams;

    // Convert/parse search params to match NuQS expected structure
    const searchParams: GetPostsSearchParamsDto = postSearch.cache.parse(searchParamsRaw);

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
                <PostListWrapper
                    // posts={items} total={total}
                />
            </HydrationBoundary>

        </div>
    )
}