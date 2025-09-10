"use client"

import {useState} from "react"
import {ArrowUpDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {samplePosts} from "@/app/(landing)/_data/data";
import {PostItem} from "@/app/(landing)/posts/_components/post-item";
import PostsLists from "@/app/(landing)/posts/_components/posts-lists";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";

interface PostsListSectionProps {
    posts?: PostDto[]
}

export default function PostsListSection({posts}: PostsListSectionProps) {
    const selectedPostId = 0;
    const filteredPosts = samplePosts;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                    {/* Left Sidebar - PostDto List */}
                    <PostsLists/>
                    {/* Right Content Panel */}
                    <PostItem postId={selectedPostId}/>

                </div>
            </div>
        </div>
    )
}

