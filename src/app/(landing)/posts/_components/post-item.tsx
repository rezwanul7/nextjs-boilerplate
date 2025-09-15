'use client';

import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {formatDate} from "@/lib/format";
import useSWR from 'swr'
import {getHTMLFromJSONContent} from "@/lib/tiptap.utils";
import {samplePosts} from "@/app/(landing)/posts/_data/data";
import {Badge} from "@/components/ui/badge";
import {getRoundRobinItem} from "@/lib/dummy";


interface PostItemProps {
    selectedPostId: number
    initialPost: PostDto
}

const fetcher = async (url: string) => {
    const response = await fetch(url);
    return await response.json() as PostDto;
};

export function PostItem({initialPost, selectedPostId}: PostItemProps) {
    const dummyPost = getRoundRobinItem(selectedPostId, samplePosts);

    // 3. Fetch the post data on the client side (CSR) with SWR
    const {data, error, isLoading} = useSWR(
        `/api/posts/${selectedPostId}`,
        fetcher,
        {
            fallbackData: initialPost,   // ✅ seeded from SSR
            revalidateOnMount: false,     // don’t fetch again right after mount
            // revalidateIfStale: false,     // don’t auto-fetch when switching back
            // revalidateOnFocus: false,     // don’t refetch on window focus
            dedupingInterval: 60_000,     // reuse same query result for 1 min
        }
    );

    const post: PostDto = data;
    const postHtml = post.content ? getHTMLFromJSONContent(post.content) : "";

    // if(!post) return <p className="p-6">Post not found</p>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <p className="p-6">Error loading post</p>;

    console.log("PostItem : postId changed to " + selectedPostId);

    return (
        <div className="lg:col-span-3">
            {/* Hero Section with Background */}
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-black text-sm">{dummyPost.initials}</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2 text-balance">{post.title}</h1>
                    <p className="text-blue-100 text-sm">{dummyPost.author}</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 overflow-y-auto h-[352px]">
                {/* Article Meta */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{dummyPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Updated At {formatDate(post.updatedAt)}</span>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {dummyPost.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                    <div className="whitespace-pre-wrap text-pretty leading-relaxed">
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{__html: postHtml}}/>
                        </div>
                    </div>
                </div>

                {/* Author Info Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">About the Author</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {dummyPost.initials}
                        </span>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white text-sm">{dummyPost.author}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                    Passionate about sharing knowledge and helping developers grow their skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}