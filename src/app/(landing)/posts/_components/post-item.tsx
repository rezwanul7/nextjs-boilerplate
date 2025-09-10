import {Badge} from "@/components/ui/badge";
import {samplePosts} from "@/app/(landing)/_data/data";
import { sleep } from "@/lib/sleep";
import { cache } from "react";

interface PostItemProps {
    postId: number
}

export const getSamplePost = cache(async (id: number) => {
    return samplePosts[id - 1];
});

export async function PostItem({postId}: PostItemProps) {
    await sleep(3000);
    const selectedPost = await getSamplePost(postId);

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
                                <span className="font-bold text-black text-sm">{selectedPost.initials}</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2 text-balance">{selectedPost.title}</h1>
                    <p className="text-blue-100 text-sm">{selectedPost.author}</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 overflow-y-auto h-[352px]">
                {/* Article Meta */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{selectedPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{selectedPost.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Published {selectedPost.timeAgo}</span>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {selectedPost.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                    <div className="whitespace-pre-wrap text-pretty leading-relaxed">{selectedPost.content}</div>
                </div>

                {/* Author Info Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">About the Author</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <div
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {selectedPost.initials}
                        </span>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white text-sm">{selectedPost.author}</p>
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