"use client"

import {ArrowUpDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import Link from "next/link";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {formatDate} from "@/lib/format";
import Pagination from "@/app/(landing)/(home)/_components/pagination";
import {parseAsInteger, useQueryState} from "nuqs";
import {PostItem} from "@/app/(landing)/posts/_components/post-item";
import PostPermalink from "@/app/(landing)/posts/_components/post-permalink";
import {Input} from "@/components/ui/input";

interface PostsListsProps {
    posts: PostDto[],
    total: number,
    initialPostId: number,
    initialPost: PostDto
}

export default function PostsLists({posts, total, initialPostId, initialPost}: PostsListsProps) {
    const [selectedPostId, setSelectedPostId] = useQueryState("postId", parseAsInteger.withDefault(initialPostId));
    const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));
    const [page] = useQueryState('page', parseAsInteger.withDefault(1));

    const onClickPostListItem = (postId: number) => {
        setSelectedPostId(postId);
    }


    // const [selectedPostId, setSelectedPostId] = useQueryState("postId", {
    //     defaultValue: String(initialPostId), // ensure controlled input
    // });

    //
    // const [searchQuery, setSearchQuery] = useState("")
    //
    // const filteredPosts = samplePosts.filter(
    //     (post) =>
    //         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         post.content.toLowerCase().includes(searchQuery.toLowerCase()),
    // )

    return (
        <div className="max-w-7xl px-6">
            <div className="rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                    {/* Left Sidebar - PostDto List */}
                    <div className="lg:col-span-2 border-r border-gray-200 dark:border-gray-700">
                        {/* Header with filters */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                            <div className="flex items-center gap-4">
                                {/* Results count */}
                                <span className="text-sm font-medium text-gray-900 dark:text-white shrink-0">
                                    {posts.length} results
                                </span>

                                {/* Search Bar - takes remaining space */}
                                <div className="relative flex-1">
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-9 h-9 text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 px-3 text-xs bg-gray-800 text-white hover:text-white border-gray-700 hover:bg-gray-700"
                                    >
                                        <ArrowUpDown className="h-3 w-3"/>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* PostDto List */}
                        <div className="overflow-y-auto h-[500px]">
                            {posts.map((post) => (
                                <PostListLinkItem2
                                    key={post.id}
                                    post={post}
                                    selectedPostId={selectedPostId}
                                    onClickPostListItem={onClickPostListItem}
                                />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <Pagination page={page} perPage={pageSize} total={total}/>
                    </div>
                    {/* Right Content Panel */}
                    {/* Suspense can make the SEO bad - it will initially display Loading... rather than actual post*/}
                    {/*<Suspense key={postId} fallback={<LoadingJobContent/>}>*/}
                    <PostItem initialPost={initialPost} selectedPostId={selectedPostId}/>
                    {/*</Suspense>*/}
                </div>
            </div>
        </div>
    )
}

function PostListLinkItem2({
                               post,
                               selectedPostId,
                               onClickPostListItem,
                           }: {
    post: PostDto,
    selectedPostId: number,
    onClickPostListItem: (postId: number) => void,
}) {


    return (
        <div
            className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedPostId === post.id ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500" : ""
            }`}
            onClick={() => onClickPostListItem(post.id)}
        >
            <div className="flex items-start gap-3">
                {/* Author Initials Circle */}
                <div
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{post.id}</span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                        {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{post.author?.firstName}</p>
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                            {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.updatedAt)}</span>
                    </div>
                </div>

                {/* Permalink Icon */}
                <PostPermalink post={post}/>
            </div>
        </div>
    )

}

function PostListLinkItem({
                              post,
                              selectedPostId,
                          }: {
    post: PostDto;
    selectedPostId?: number;
}) {
    return (
        <Link
            href={`/?postId=${post.id}`}
            scroll={false} // prevent full page jump
            prefetch={false}
            className={`block p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedPostId === post.id
                    ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500"
                    : ""
            }`}
        >
            <div className="flex items-start gap-3">
                {/* Author Initials Circle */}
                <div
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {post.id}
          </span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                        {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {post.author?.firstName}
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                            {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatDate(post.updatedAt)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}