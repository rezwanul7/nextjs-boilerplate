import {BookOpen} from "lucide-react";
import {totalPostsCount} from "@/app/(landing)/posts/_lib/post.queries";

export async function HeroSectionStats() {
    const total = await totalPostsCount();

    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 text-sm font-medium">{total} articles available</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
                <BookOpen className="h-3 w-3 text-blue-600"/>
                <span className="text-gray-700 text-sm font-medium">5+ categories</span>
            </div>
        </div>
    )
}

export function HeroSectionStatsSkeleton() {
    return (
        <div className="flex items-center justify-center gap-4 mt-6 animate-pulse">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
                <div className="h-3 w-3 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}