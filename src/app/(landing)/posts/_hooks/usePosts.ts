"use client";

import {useQuery} from "@tanstack/react-query";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {usePostSearchParams} from "@/app/dashboard/posts/_hooks/usePostSearchParams";
import {fetchPosts} from "@/app/(landing)/posts/_lib/post.api.client"; // your nuqs wrapper


export function usePosts() {
    const {queryParams, setQueryParams, queryString} = usePostSearchParams();

    const {data: response, isLoading, isPending, isFetching, isError, error} = useQuery({
        queryKey: ["posts", queryString],
        queryFn: () => fetchPosts(queryString),
    });

    const items = (response?.data ?? []) as PostDto[];
    const total = (response?.total ?? 0) as number;

    const handlePageChange = async (newPage: number) => {
        await setQueryParams({page: newPage});
    };

    return {
        queryParams,
        queryString,
        items,
        total,
        isLoading,
        isPending,
        isFetching,
        isError,
        error,
        handlePageChange,
    };
}
