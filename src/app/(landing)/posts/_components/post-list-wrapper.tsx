'use client';

import {useState} from "react"
import {usePosts} from "@/app/(landing)/posts/_hooks/usePosts";
import {PostListSkeleton} from "@/app/(landing)/posts/_components/post-list-skeleton";
import {PostListPagination} from "@/app/(landing)/posts/_components/post-list-pagination";
import {samplePosts} from "@/app/(landing)/posts/_data/samplePosts.data";
import {PostList} from "@/app/(landing)/posts/_components/post-list";


// {posts, total}: PostList2Props
export default function PostListWrapper() {
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
        queryParams,
        items,
        total,
        isLoading,
        isError,
        error,
        handlePageChange,
    } = usePosts();

    if (isLoading) return <PostListSkeleton count={3}/>;
    if (isError) return <div>Error: {error?.message}</div>;

    return (
        <div className="max-w-2xl mx-auto px-6 py-8">
            {isLoading && <PostListSkeleton count={3}/>}
            {isError && <div>Error: {error?.message}</div>}
            {!isLoading && !isError &&
                <PostList
                    items={items}
                    dummyPosts={samplePosts}
                    handleLike={handleLike}
                    handleBookmark={handleBookmark}
                />
            }

            <div className="p-6">
                <PostListPagination
                    totalCount={total}
                    page={queryParams.page}
                    perPage={queryParams.perPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}