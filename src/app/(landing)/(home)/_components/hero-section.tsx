import {BookOpen} from "lucide-react";

interface HeroSectionProps {
    total?: number
}

export function HeroSection({total}: HeroSectionProps) {
    return (
        <div className="bg-white py-20 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Small badge */}
                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-6">
                    <BookOpen className="h-4 w-4 text-blue-600"/>
                    <span className="text-sm font-medium text-gray-700">Developer Knowledge Hub</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                    Discover Amazing{" "}
                    <span className="block text-blue-600">Content</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Explore our curated collection of articles, tutorials, and insights
                    from the world of modern development.
                </p>

                {/* Quick features */}
                <div className="flex items-center justify-center gap-6 text-sm mb-12 text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Updated Daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span>Expert Authors</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span>Free Access</span>
                    </div>
                </div>

                {/* Stats */}
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
            </div>
        </div>
    )
}