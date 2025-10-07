"use client";

import {useInfiniteScrollQuery} from "@/app/(landing)/posts/_hooks/useInfiniteScrollQuery";
import {useInfinitePosts} from "@/app/(landing)/posts/_hooks/useInfiniteScrollPosts";

export default function PostsPage() {
    const {
        items,
        ref,
        isFetchingNextPage,
        // isEndReached,
        // status,
    } = useInfinitePosts();

    return (
        <div className="max-w-xl mx-auto">
            {/*{status === "loading" && <p>Loading...</p>}*/}

            {items.map((post) => (
                <div key={post.id} className="border p-4 mb-2">
                    {post.title}
                </div>
            ))}

            <div ref={ref} className="h-10 flex justify-center items-center text-gray-500">
                {isFetchingNextPage
                    ? "Loading more..."
                    // : isEndReached
                    //     ? "You’ve reached the end!"
                        : "Scroll to load more"}
            </div>
        </div>
    );
}
