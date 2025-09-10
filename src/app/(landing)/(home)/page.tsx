import type {Metadata} from "next";
import {SearchParams} from "nuqs/server";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import {HeroSection} from "@/app/(landing)/(home)/_components/hero-section";
import {searchHomePosts} from "@/app/(landing)/posts/_lib/post.queries";
import PostsLists from "@/app/(landing)/posts/_components/posts-lists";
import {PostItem} from "@/app/(landing)/posts/_components/post-item";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: 'HomePage'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;
    const id = Number(searchParams.id);

    console.log("post id ", id);

    const postSearchParams = postSearch.cache.parse(searchParams);

    const {items, total} = await searchHomePosts(postSearchParams);


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <HeroSection total={total}/>


            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                        {/* Left Sidebar - PostDto List */}
                        <PostsLists/>
                        {/* Right Content Panel */}
                        <Suspense key={id} fallback={<LoadingJobContent/>}>
                            <PostItem postId={id}/>
                        </Suspense>

                    </div>
                </div>
            </div>
        </div>
    )
}

function LoadingJobContent() {
    return (
        <div className="lg:col-span-3">
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                    <div className="mb-4">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-black text-sm">...</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2 text-balance">Loading...</h1>
                    <p className="text-blue-100 text-sm">Please wait</p>
                </div>
            </div>
            <div className="p-6 overflow-y-auto h-[352px]">
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Techn
                        ologies</h3>
                    <div className="flex flex-wrap gap-2">
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Loading content...</p>
                    <p className="text-gray-700 dark:text-gray-300">Please wait while we fetch the data.</p>
                    <p className="text-gray-700 dark:text-gray-300">This might take a few seconds.</p>
                </div>
            </div>
        </div>
    )
}