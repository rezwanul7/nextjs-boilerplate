"use client"

import {useState} from "react"
import {ArrowUpDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {samplePosts} from "@/app/(landing)/_data/data";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function PostsLists() {
    const [selectedPostId, setSelectedPostId] = useState(0);

    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = samplePosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="lg:col-span-2 border-r border-gray-200 dark:border-gray-700">
            {/* Header with filters */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {filteredPosts.length} results
                  </span>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 px-3 text-xs bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                        >
                            <ArrowUpDown className="h-3 w-3 mr-1"/>
                            RELEVANT
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 px-3 text-xs text-gray-600 border-gray-300 hover:bg-gray-100 bg-transparent"
                        >
                            RECENT
                        </Button>
                        <Button variant="default" size="sm"
                                className="h-8 px-3 text-xs bg-blue-600 hover:bg-blue-700">
                            APPLY
                        </Button>
                    </div>
                </div>
            </div>

            {/* PostDto List */}
            <div className="overflow-y-auto h-[500px]">
                {filteredPosts.map((post) => (
                    <PostListLinkItem key={post.id} post={post} selectedPostId={selectedPostId}/>
                ))}
            </div>
        </div>
    )
}

function PostListLinkItem2({
                              post,
                              selectedPostId,
                          }: {
    post: any;
    selectedPostId?: number;
}) {
    const router = useRouter();

    return (
        <div
            className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedPostId === post.id ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500" : ""
            }`}
            onClick={() => router.push(`/?id=${post.id}`)}
        >
            <div className="flex items-start gap-3">
                {/* Author Initials Circle */}
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{post.initials}</span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                        {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{post.author}</p>
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                            {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.timeAgo}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
function PostListLinkItem({
                              post,
                              selectedPostId,
                          }: {
    post: any;
    selectedPostId?: number;
}) {
    return (
        <Link
            href={`/?id=${post.id}`}
            scroll={false} // prevent full page jump
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
            {post.initials}
          </span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                        {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {post.author}
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                            {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.timeAgo}
            </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}


