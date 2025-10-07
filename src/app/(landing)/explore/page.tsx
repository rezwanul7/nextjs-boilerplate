import {SearchParams} from "nuqs/server";
import {GetPostsSearchParamsDto, postSearch} from "@/app/dashboard/posts/_lib/post.search";
import PostListWrapper from "@/app/(landing)/posts/_components/post-list-wrapper";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {fetchPosts} from "@/app/(landing)/posts/_lib/post.api.client";
import {getQueryClient} from "@/lib/tanstack-query-client";
import InfinitePostListWrapper from "@/app/(landing)/explore/infinite-post-list-wrapper";

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParamsRaw  = await props.searchParams;

    // Convert/parse search params to match NuQS expected structure
    const searchParams: GetPostsSearchParamsDto = postSearch.cache.parse(searchParamsRaw);

    // 1. Get the initial post data (SSR)
    const queryString = postSearch.serialize(searchParams);
    console.log("server- queryString", queryString);

    // Exclude 'page' from the query string for certain uses (e.g., caching keys in infinite scroll)
    const { page, ...queryParamsForKey } = searchParams;
    const cacheKey = postSearch.serialize(queryParamsForKey);


    const queryClient = getQueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["explore-posts", cacheKey],
        queryFn: () => fetchPosts(queryString),
        getNextPageParam: () => {
            // We don't need this for SSR, as we are only prefetching the first page.
            return undefined;
        },
        initialPageParam : 1
    })

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {/*<HeroSection/>*/}
                <InfinitePostListWrapper/>
            </HydrationBoundary>

        </div>
    )
}
