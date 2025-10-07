"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Bookmark, Heart, MessageCircle, MoreHorizontal, Repeat2, Share} from "lucide-react";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {ImageWithFallback} from "@/components/images/image-with-fallback";
import {getRoundRobinItem} from "@/lib/dummy";
import {SamplePost} from "@/app/(landing)/posts/_data/samplePosts.data";

interface PostListProps {
    items: PostDto[];
    dummyPosts: SamplePost[];
    handleLike: (id: number) => void;
    handleBookmark: (id: number) => void;
}

export function PostList({
                             items,
                             dummyPosts,
                             handleLike,
                             handleBookmark,
                         }: PostListProps) {
    return (
        <div className="space-y-6">
            {items.map((post) => {
                const dummyPost = getRoundRobinItem(post.id, dummyPosts);

                return (
                    <div
                        key={post.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-200"
                    >
                        {/* Post Header */}
                        <div className="p-6 pb-4">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">
                      {dummyPost.initials}
                    </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                            {dummyPost.author}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {dummyPost.username} • {dummyPost.timeAgo}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-gray-400 hover:text-gray-600"
                                >
                                    <MoreHorizontal className="h-4 w-4"/>
                                </Button>
                            </div>

                            {/* Post Content */}
                            <div className="mb-4">
                                <p className="text-gray-900 dark:text-white text-sm leading-relaxed whitespace-pre-wrap">
                                    {post.title}
                                </p>
                                {dummyPost.image && (
                                    <div className="mt-4 rounded-xl overflow-hidden">
                                        <ImageWithFallback
                                            src={dummyPost.image}
                                            alt="Post image"
                                            width={64}
                                            height={64}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {dummyPost.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Engagement Stats */}
                            <div
                                className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400 mb-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                                <span>{dummyPost.likes} likes</span>
                                <span>{dummyPost.comments} comments</span>
                                <span>{dummyPost.reposts} reposts</span>
                            </div>

                            {/* Action Buttons */}
                            <div
                                className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleLike(dummyPost.id)}
                                    className={`flex items-center gap-2 hover:bg-red-50 hover:text-red-600 ${
                                        dummyPost.isLiked ? "text-red-600" : "text-gray-500"
                                    }`}
                                >
                                    <Heart
                                        className={`h-4 w-4 ${dummyPost.isLiked ? "fill-current" : ""}`}
                                    />
                                    <span className="text-xs">{dummyPost.likes}</span>
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 hover:bg-orange-50 hover:text-orange-600 text-gray-500"
                                >
                                    <MessageCircle className="h-4 w-4"/>
                                    <span className="text-xs">{dummyPost.comments}</span>
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 hover:bg-green-50 hover:text-green-600 text-gray-500"
                                >
                                    <Repeat2 className="h-4 w-4"/>
                                    <span className="text-xs">{dummyPost.reposts}</span>
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 hover:bg-gray-50 hover:text-gray-600 text-gray-500"
                                >
                                    <Share className="h-4 w-4"/>
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleBookmark(dummyPost.id)}
                                    className={`flex items-center gap-2 hover:bg-amber-50 hover:text-amber-600 ${
                                        dummyPost.isBookmarked ? "text-amber-600" : "text-gray-500"
                                    }`}
                                >
                                    <Bookmark
                                        className={`h-4 w-4 ${dummyPost.isBookmarked ? "fill-current" : ""}`}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
