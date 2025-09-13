'use client';
import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowLeft, Bookmark, Share2} from "lucide-react";

export default function BlogPageHeader() {
    const [isBookmarked, setIsBookmarked] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/20 bg-white backdrop-blur-xl dark:bg-slate">
        {/*<header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/80 dark:supports-[backdrop-filter]:bg-slate-900/60">*/}
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50 dark:hover:bg-slate-800">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`hover:bg-blue-50 dark:hover:bg-slate-800 ${isBookmarked ? "text-blue-600 dark:text-blue-400" : ""}`}
                    >
                        <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-blue-50 dark:hover:bg-slate-800">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    )
}