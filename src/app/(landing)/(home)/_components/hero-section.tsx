import {BookOpen, Search} from "lucide-react";
import SearchInput from "@/app/(landing)/(home)/_components/search-input";
import {Button} from "@/components/ui/button";

interface HeroSectionProps {
    total?: number
}

export function HeroSection({total}: HeroSectionProps) {
    return (
        <div
            className="bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden"
            style={{backgroundColor: "#2563eb"}}
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
                style={{backgroundColor: "#2563eb"}}>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="mb-8">
                    <div
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <BookOpen className="h-4 w-4 text-blue-200"/>
                        <span className="text-sm font-medium text-blue-100">Developer Knowledge Hub</span>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white"
                        style={{color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.3)"}}
                    >
                        Discover Amazing
                        <span
                            className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Content
              </span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl mb-4 text-pretty max-w-3xl mx-auto leading-relaxed text-blue-50"
                        style={{color: "#f0f9ff", textShadow: "0 1px 2px rgba(0,0,0,0.2)"}}
                    >
                        Explore our curated collection of articles, tutorials, and insights from the world of modern
                        development
                    </p>
                    <div
                        className="flex items-center justify-center gap-6 text-sm mb-12 text-blue-50"
                        style={{color: "#f0f9ff"}}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span style={{textShadow: "0 1px 2px rgba(0,0,0,0.2)"}}>Updated Daily</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span style={{textShadow: "0 1px 2px rgba(0,0,0,0.2)"}}>Expert Authors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span style={{textShadow: "0 1px 2px rgba(0,0,0,0.2)"}}>Free Access</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div
                            className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
                            <div className="flex items-center">
                                <div
                                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-3 shadow-lg">
                                    <Search className="h-5 w-5 text-white"/>
                                </div>
                                <SearchInput/>
                                <Button
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 h-10 rounded-xl shadow-lg font-medium transition-all duration-200 hover:shadow-xl">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-blue-100 text-sm font-medium">{total} articles available</span>
                        </div>
                        <div
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <BookOpen className="h-3 w-3 text-blue-200"/>
                            <span className="text-blue-100 text-sm font-medium">5+ categories</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}