import { Skeleton } from "@/components/ui/skeleton";

/**
 * 🦴 PostListSkeleton
 *
 * Displays loading placeholders for a list of posts using ShadCN Skeleton components.
 * Designed to match the post card layout visually while data is being fetched.
 *
 * ---
 * ✅ Usage
 * ```tsx
 * {isLoading && <PostListSkeleton count={3} />}
 * ```
 * ---
 * 💡 Tips:
 * - No pagination or load-more needed here; those appear after data load.
 * - Keeps your UI consistent while posts are loading.
 */
export function PostListSkeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    <div className="p-6 pb-4">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Skeleton className="w-12 h-12 rounded-full" />
                                <div>
                                    <Skeleton className="h-3 w-24 mb-2" />
                                    <Skeleton className="h-2.5 w-32" />
                                </div>
                            </div>
                            <Skeleton className="h-8 w-8 rounded-md" />
                        </div>

                        {/* Post Content */}
                        <div className="space-y-3 mb-4">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                            <Skeleton className="h-48 w-full rounded-xl" />
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mb-4">
                            <Skeleton className="h-5 w-12 rounded-full" />
                            <Skeleton className="h-5 w-10 rounded-full" />
                            <Skeleton className="h-5 w-14 rounded-full" />
                        </div>

                        {/* Engagement Stats */}
                        <div className="flex gap-6 mb-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-3 w-20" />
                            <Skeleton className="h-3 w-14" />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Skeleton key={idx} className="h-8 w-12 rounded-md" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
