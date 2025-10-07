"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, type UseInfiniteQueryResult } from "@tanstack/react-query";

export type QueryFnAny<TData> = (context: any) => Promise<TData>;
export type GetNextPageParamAny = (lastPage: any, allPages: any[]) => number | undefined;

export function useInfiniteScrollQuery<TData = any>({
                                                        queryKey,
                                                        queryFn,
                                                        getNextPageParam,
                                                        initialPage = 1,
                                                        rootMargin = "200px",
                                                    }: {
    queryKey: readonly unknown[];
    queryFn: QueryFnAny<TData>;
    getNextPageParam: GetNextPageParamAny;
    initialPage?: number;
    rootMargin?: string;
}): {
    query: UseInfiniteQueryResult<any, unknown>;
    items: any[]; // flattened items (pages.flatMap(page => page.data) is common)
    ref: (node?: Element | null) => void;
    isFetchingNextPage: boolean;
    isEndReached: boolean;
    hasNextPage: boolean | undefined;
} {
    const query = useInfiniteQuery({
        queryKey,
        queryFn,
        getNextPageParam,
        initialPageParam: initialPage,
    });

    const { ref, inView } = useInView({ rootMargin });
    const { fetchNextPage, hasNextPage, isFetchingNextPage } = query;

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage().catch(() => {
                /* errors are surfaced via query.error; swallow here */
            });
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    // If your pages are shaped like { data: [...] } flatten them.
    const items = Array.isArray(query.data?.pages)
        ? (query.data.pages as any[]).flatMap((p: any) => p.data ?? p)
        : [];

    const isEndReached = !hasNextPage && !isFetchingNextPage;

    return {
        query,
        items,
        ref,
        isFetchingNextPage,
        isEndReached,
        hasNextPage,
    };
}
