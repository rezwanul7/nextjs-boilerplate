"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import {usePostSearchParams} from "@/app/dashboard/posts/_hooks/usePostSearchParams";
import {fetchPosts} from "@/app/(landing)/posts/_lib/post.api.client";

function buildUrl(queryString?: string, pageParam: number = 1) {
    if (!queryString || queryString === "") return `?page=${pageParam}`;
    return `${queryString}&page=${pageParam}`;
}

export function useInfinitePosts() {
    const { queryParams, setQueryParams, queryString, queryStringExcludingPage:cacheKey } = usePostSearchParams();

    // Cache key should include all filters/search params except page.
    console.log("queryString", queryString);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isFetching,
        status,
    } = useInfiniteQuery({
        queryKey: ["explore-posts", cacheKey],
        queryFn: async ({ pageParam = 1 }) => {
            // const res = await fetchPosts(`${queryString}&page=${pageParam}`);
            const finalQueryString =
                queryString && queryString.length > 0
                    ? `${queryString}&page=${pageParam}`
                    : `?page=${pageParam}`;

            const res = await fetchPosts(finalQueryString);
            return { ...res, page: pageParam };
        },
        getNextPageParam: (lastPage, allPages) => {
            const perPage = queryParams.perPage ?? 10;
            const totalPages = Math.ceil(lastPage.total / perPage);
            const nextPage = allPages.length + 1;
            return nextPage <= totalPages ? nextPage : undefined;
        },
        initialPageParam: 1,
    });

    const { ref, inView } = useInView({ rootMargin: "200px" });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    // const isEndReached =
    //     status === "success" && !hasNextPage && !isFetching && data?.pages?.length! > 0;

    const items = data?.pages.flatMap((page) => page.data) ?? [];

    return {
        queryParams,
        setQueryParams,
        queryString,
        items,
        total: data?.pages?.[0]?.total ?? 0,
        ref,
        isFetchingNextPage,
        // isEndReached,
        status,
    };
}
