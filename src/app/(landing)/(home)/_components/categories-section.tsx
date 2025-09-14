import {Code, Database, Palette, Server, Shield, Smartphone, Zap} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import Link from "next/link"

const categories = [
    {
        name: "Frontend Development",
        icon: Code,
        description: "React, Vue, Angular, and modern frontend frameworks",
        articleCount: 125,
        color: "from-blue-500 to-indigo-500",
        tags: ["React", "Vue.js", "Angular", "JavaScript", "TypeScript"],
    },
    {
        name: "Backend Development",
        icon: Server,
        description: "Node.js, Python, databases, and server-side technologies",
        articleCount: 98,
        color: "from-green-500 to-emerald-500",
        tags: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
    },
    {
        name: "UI/UX Design",
        icon: Palette,
        description: "Design systems, user experience, and interface design",
        articleCount: 67,
        color: "from-purple-500 to-pink-500",
        tags: ["Figma", "Design Systems", "CSS", "Tailwind", "User Research"],
    },
    {
        name: "Mobile Development",
        icon: Smartphone,
        description: "React Native, Flutter, and mobile app development",
        articleCount: 54,
        color: "from-orange-500 to-red-500",
        tags: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"],
    },
    {
        name: "Web Performance",
        icon: Zap,
        description: "Optimization, Core Web Vitals, and performance best practices",
        articleCount: 43,
        color: "from-yellow-500 to-orange-500",
        tags: ["Performance", "Core Web Vitals", "Optimization", "SEO", "Lighthouse"],
    },
    {
        name: "Database & Storage",
        icon: Database,
        description: "SQL, NoSQL, data modeling, and storage solutions",
        articleCount: 39,
        color: "from-teal-500 to-cyan-500",
        tags: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Data Modeling"],
    },
    {
        name: "DevOps & Tools",
        icon: Shield,
        description: "CI/CD, deployment, monitoring, and development tools",
        articleCount: 31,
        color: "from-gray-500 to-slate-500",
        tags: ["Docker", "CI/CD", "AWS", "Vercel", "Monitoring"],
    },
]

export function CategoriesSection() {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Explore Categories</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Discover articles organized by technology, framework, and development area to find exactly what
                        you're
                        looking for.
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                                    >
                                        <IconComponent className="h-7 w-7 text-white"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{category.articleCount} articles</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{category.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {category.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Link href="/search">
                                    <Button
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold">
                                        Browse Articles
                                    </Button>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Content
                        Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">457</div>
                            <div className="text-gray-600 dark:text-gray-400">Total Articles</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">7</div>
                            <div className="text-gray-600 dark:text-gray-400">Categories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                            <div className="text-gray-600 dark:text-gray-400">Topics Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-pink-600 mb-2">25+</div>
                            <div className="text-gray-600 dark:text-gray-400">Expert Authors</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
