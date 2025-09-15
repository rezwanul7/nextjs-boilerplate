import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {ChevronRight, Clock} from "lucide-react";
import {Button} from "@/components/ui/button";

interface BlogPageRelatedPostsProps {
    relatedPosts: ({
        id: number;
        title: string;
        slug: string;
        readTime: string;
        category: string;
        excerpt: string;
        publishedAt: string;
        author: string
    })[]
}

export default async function BlogPageRelatedPosts({relatedPosts}: BlogPageRelatedPostsProps) {
    return (
        <section className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Continue
                        Reading</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Discover more articles you might find interesting
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((post) => (
                        // /blog/${post.slug}
                        <Link key={post.id} href="#" scroll={false}>
                            <article
                                className="group h-full p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer">
                                <div className="flex items-start justify-between mb-4">
                                    <Badge variant="outline"
                                           className="text-xs font-medium border-slate-300 dark:border-slate-600">
                                        {post.category}
                                    </Badge>
                                    <ChevronRight
                                        className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"/>
                                </div>

                                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div
                                    className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mt-auto">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-3 w-3"/>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <span>by {post.author}</span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                        >
                            View All Articles
                            <ChevronRight className="h-5 w-5"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}