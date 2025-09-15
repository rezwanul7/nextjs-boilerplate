import {BookOpen, Code, Palette, Server, Shield, Smartphone, TrendingUp, Zap} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"

const categories = [
    {
        name: "Frontend Development",
        icon: Code,
        description: "React, Vue, CSS tricks, and modern frontend insights",
        postCount: 1250,
        color: "from-blue-500 to-indigo-500",
        tags: ["React", "Vue.js", "CSS", "JavaScript", "TypeScript"],
        trending: true,
    },
    {
        name: "Backend Development",
        icon: Server,
        description: "Node.js, APIs, databases, and server-side tips",
        postCount: 980,
        color: "from-green-500 to-emerald-500",
        tags: ["Node.js", "Python", "APIs", "Databases", "Architecture"],
        trending: false,
    },
    {
        name: "UI/UX Design",
        icon: Palette,
        description: "Design systems, user experience, and visual design",
        postCount: 670,
        color: "from-purple-500 to-pink-500",
        tags: ["Figma", "Design Systems", "UX", "Prototyping", "Accessibility"],
        trending: true,
    },
    {
        name: "Mobile Development",
        icon: Smartphone,
        description: "React Native, Flutter, and mobile app insights",
        postCount: 540,
        color: "from-orange-500 to-red-500",
        tags: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"],
        trending: false,
    },
    {
        name: "Web Performance",
        icon: Zap,
        description: "Performance tips, optimization tricks, and speed insights",
        postCount: 430,
        color: "from-yellow-500 to-orange-500",
        tags: ["Performance", "Core Web Vitals", "Optimization", "Speed", "Lighthouse"],
        trending: true,
    },
    {
        name: "DevOps & Tools",
        icon: Shield,
        description: "CI/CD, deployment tips, and developer productivity",
        postCount: 310,
        color: "from-gray-500 to-slate-500",
        tags: ["Docker", "CI/CD", "AWS", "Vercel", "Productivity"],
        trending: false,
    },
    {
        name: "Career & Learning",
        icon: BookOpen,
        description: "Career advice, learning resources, and industry insights",
        postCount: 890,
        color: "from-teal-500 to-cyan-500",
        tags: ["Career", "Learning", "Interviews", "Skills", "Growth"],
        trending: true,
    },
    {
        name: "Industry News",
        icon: TrendingUp,
        description: "Latest tech news, updates, and industry discussions",
        postCount: 650,
        color: "from-indigo-500 to-purple-500",
        tags: ["News", "Updates", "Trends", "Industry", "Discussion"],
        trending: true,
    },
]

export default function CategoriesPage() {
    return (
        <div>
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Explore Topics</h1>
                    <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Discover quick thoughts and insights organized by topic. Join conversations that spark
                        innovation.
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                            >
                                {category.trending && (
                                    <div className="absolute -top-2 -right-2">
                                        <Badge
                                            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-2 py-1">
                                            Trending
                                        </Badge>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                                    >
                                        <IconComponent className="h-6 w-6 text-white"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {category.postCount.toLocaleString()} micro-posts
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">{category.description}</p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {category.tags.slice(0, 3).map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1">
                                            #{tag}
                                        </Badge>
                                    ))}
                                    {category.tags.length > 3 && (
                                        <Badge variant="secondary" className="text-xs px-2 py-1">
                                            +{category.tags.length - 3}
                                        </Badge>
                                    )}
                                </div>

                                <Button
                                    className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-medium text-sm">
                                    Explore Posts
                                </Button>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Community
                        Stats</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">5.7k</div>
                            <div className="text-gray-600 dark:text-gray-400">Total Micro-Posts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-pink-600 mb-2">8</div>
                            <div className="text-gray-600 dark:text-gray-400">Topics</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">2.1k</div>
                            <div className="text-gray-600 dark:text-gray-400">Active Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-rose-600 mb-2">150+</div>
                            <div className="text-gray-600 dark:text-gray-400">Daily Posts</div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Trending This
                        Week</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["#React19", "#TypeScript", "#WebPerformance", "#CSS", "#NextJS", "#AI", "#DevTools", "#Career"].map(
                            (tag, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm font-medium hover:bg-orange-600 hover:text-white cursor-pointer transition-colors"
                                >
                                    {tag}
                                </Badge>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
