'use client';

import {useState} from "react"
import {Bookmark, Heart, MessageCircle, MoreHorizontal, Repeat2, Share,} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {usePosts} from "@/app/(landing)/posts/_hooks/usePosts";
import {getRoundRobinItem} from "@/lib/dummy";
import {ImageWithFallback} from "@/components/images/image-with-fallback";


const samplePosts = [
    {
        id: 1,
        author: "Sarah Chen",
        username: "@sarahdev",
        initials: "SC",
        timeAgo: "2h",
        content:
            "Just discovered this amazing CSS trick for creating smooth hover animations! 🎨\n\n```css\n.card {\n  transition: transform 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-8px);\n}\n```\n\nSuch a simple way to add life to your UI components!",
        tags: ["CSS", "Animation", "WebDev"],
        likes: 42,
        comments: 8,
        reposts: 12,
        isLiked: false,
        isBookmarked: true,
        image: null,
    },
    {
        id: 2,
        author: "Alex Rodriguez",
        username: "@alexcodes",
        initials: "AR",
        timeAgo: "4h",
        content:
            "Hot take: TypeScript's strict mode should be enabled by default in all new projects. The initial learning curve is worth the long-term benefits.\n\nWhat's your experience with strict mode? Love it or hate it?",
        tags: ["TypeScript", "Opinion", "DevLife"],
        likes: 156,
        comments: 23,
        reposts: 31,
        isLiked: true,
        isBookmarked: false,
        image: null,
    },
    {
        id: 3,
        author: "Maya Patel",
        username: "@mayabuilds",
        initials: "MP",
        timeAgo: "6h",
        content:
            "Finally shipped our new dashboard redesign! 🚀\n\nKey improvements:\n• 40% faster load times\n• Mobile-first responsive design\n• Dark mode support\n• Accessibility score: 98/100\n\nFeels good to see months of work go live!",
        tags: ["Shipping", "Dashboard", "Performance"],
        likes: 89,
        comments: 15,
        reposts: 22,
        isLiked: false,
        isBookmarked: false,
        image: "/professional-woman-developer.png",
    },
    {
        id: 4,
        author: "Dev Community",
        username: "@devcommunity",
        initials: "DC",
        timeAgo: "8h",
        content:
            '📚 Weekend reading list for developers:\n\n1. "Clean Code" by Robert Martin\n2. "System Design Interview" by Alex Xu\n3. "The Pragmatic Programmer" by Hunt & Thomas\n\nWhich one should I start with? Drop your recommendations below! 👇',
        tags: ["Books", "Learning", "Community"],
        likes: 234,
        comments: 67,
        reposts: 89,
        isLiked: true,
        isBookmarked: true,
        image: null,
    },
    {
        id: 5,
        author: "Tech Insights",
        username: "@techinsights",
        initials: "TI",
        timeAgo: "12h",
        content:
            "React 19 is bringing some exciting changes! 🔥\n\n• New React Compiler for automatic optimization\n• Improved Suspense with better error boundaries\n• Enhanced Server Components\n• Built-in support for Web Components\n\nThe future of React looks bright!",
        tags: ["React", "React19", "Updates"],
        likes: 312,
        comments: 45,
        reposts: 78,
        isLiked: false,
        isBookmarked: false,
        image: null,
    },
    {
        id: 6,
        author: "Dev Community",
        username: "@devcommunity",
        initials: "DC",
        timeAgo: "8h",
        content:
            '📚 Weekend reading list for developers:\n\n1. "Clean Code" by Robert Martin\n2. "System Design Interview" by Alex Xu\n3. "The Pragmatic Programmer" by Hunt & Thomas\n\nWhich one should I start with? Drop your recommendations below! 👇',
        tags: ["Books", "Learning", "Community"],
        likes: 234,
        comments: 67,
        reposts: 89,
        isLiked: true,
        isBookmarked: true,
        image: null,
    },
]


interface PostList2Props {
    posts: PostDto[],
    total: number
}

// {posts, total}: PostList2Props
export default function PostList2() {
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
        queryString,
        items,
        total,
        isLoading,
        isPending,
        isFetching,
        isError,
        error,
        handlePageChange,
    } = usePosts();

    if (isLoading) return <div>isLoading...</div>;
    if (isError) return <div>Error: {error?.message}</div>;

    return (
        <div className="max-w-2xl mx-auto px-6 py-8">
            {/*{isFetching && <span>Refreshing...</span>}*/}
            <div className="space-y-6">
                {items.map((post) => {
                    const dummyPost = getRoundRobinItem(post.id, samplePosts);

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
                                            <span className="text-sm font-bold text-white">{dummyPost.initials}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{dummyPost.author}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {dummyPost.username} • {dummyPost.timeAgo}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon"
                                            className="h-8 w-8 text-gray-400 hover:text-gray-600">
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
                                    {dummyPost.tags.map((tag, index) => (
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
                                        <Heart className={`h-4 w-4 ${dummyPost.isLiked ? "fill-current" : ""}`}/>
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
                                            className={`h-4 w-4 ${dummyPost.isBookmarked ? "fill-current" : ""}`}/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-6">
                <PaginationSection
                    totalCount={total}
                    page={queryParams.page}
                    perPage={queryParams.perPage}
                    onPageChange={handlePageChange}
                />
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
                <Button variant="outline" className="px-8 py-2 bg-transparent">
                    Load More Posts
                </Button>
            </div>
        </div>
    )
}

interface PaginationSectionProps {
    page: number;
    perPage: number;
    totalCount: number;
    onPageChange: (newPage: number) => void;
}

function PaginationSection({
                               page,
                               perPage,
                               totalCount,
                               onPageChange,
                           }: PaginationSectionProps) {
    const totalPages = Math.max(1, Math.ceil(totalCount / perPage));

    const handlePrev = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) onPageChange(page + 1);
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <button
                onClick={handlePrev}
                disabled={page <= 1}
                className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
            >
                Prev
            </button>

            <span className="text-sm font-medium">
        Page {page} of {totalPages} &nbsp;|&nbsp; {totalCount} results
      </span>

            <button
                onClick={handleNext}
                disabled={page >= totalPages}
                className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}