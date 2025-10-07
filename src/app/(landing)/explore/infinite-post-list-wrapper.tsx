"use client";

import {useInfinitePosts} from "@/app/(landing)/posts/_hooks/useInfiniteScrollPosts";
import {PostList} from "@/app/(landing)/posts/_components/post-list";
import {samplePosts} from "@/app/(landing)/posts/_data/samplePosts.data";
import {useState} from "react";

export default function InfinitePostListWrapper() {
    const [posts, setPosts] = useState(samplePosts);

    const handleLike = (postId: number) => {
        setPosts(
            posts.map((post) =>
                post.id === postId
                    ? {...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1}
                    : post,
            ),
        )
    }

    const handleBookmark = (postId: number) => {
        setPosts(posts.map((post) => (post.id === postId ? {...post, isBookmarked: !post.isBookmarked} : post)))
    }

    const {
        items,
        ref,
        isFetchingNextPage,
        // isEndReached,
        // status,
    } = useInfinitePosts();

    return (
        <div className="max-w-2xl mx-auto px-6 py-8">
            {/*{status === "loading" && <p>Loading...</p>}*/}

            <PostList
                items={items}
                dummyPosts={samplePosts}
                handleLike={handleLike}
                handleBookmark={handleBookmark}
            />

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
