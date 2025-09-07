"use client"

import { useState } from "react"
import { Search, User, Settings, BookOpen, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample post data
const samplePosts = [
    {
        id: 1,
        title: "Getting Started with Next.js 15",
        author: "Tech Blog",
        initials: "TB",
        timeAgo: "2d",
        category: "Frontend",
        tags: ["Next.js", "React", "TypeScript", "Web Development"],
        readTime: "5 min read",
        content: `Join us as we explore the exciting new features in Next.js 15 that make building React applications more powerful and efficient than ever before.

# Getting Started with Next.js 15

Next.js 15 introduces several exciting features that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key improvements and how to leverage them in your projects.

## Key Features

### App Router Enhancements
The App Router continues to evolve with better performance and developer experience. New features include improved caching strategies and enhanced server components.

### Turbopack Integration
Turbopack is now more stable and provides significantly faster build times for development environments.

### Enhanced TypeScript Support
Better type inference and improved error messages make development smoother than ever.

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features enabled by default.`,
        date: "2024-01-15",
    },
    {
        id: 2,
        title: "Modern CSS Techniques for 2024",
        author: "Design Weekly",
        initials: "DW",
        timeAgo: "4d",
        category: "CSS",
        tags: ["CSS", "Grid", "Flexbox", "Container Queries", "Modern Web"],
        readTime: "8 min read",
        content: `Discover the latest CSS features that are revolutionizing how we style modern web applications and create responsive designs.

# Modern CSS Techniques for 2024

CSS continues to evolve rapidly, with new features that make styling more powerful and intuitive. Let's explore the most important techniques every developer should know.

## Container Queries

Container queries allow you to style elements based on their container's size rather than the viewport:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid layout:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\``,
        date: "2024-01-12",
    },
    {
        id: 3,
        title: "Building Scalable React Applications",
        author: "React Masters",
        initials: "RM",
        timeAgo: "1w",
        category: "React",
        tags: ["React", "Architecture", "Scalability", "Best Practices", "Hooks"],
        readTime: "12 min read",
        content: `Learn proven patterns and architectural decisions for building React applications that scale with your team and user base.

# Building Scalable React Applications

As React applications grow in complexity, maintaining clean architecture becomes crucial. Here are proven patterns for building scalable React apps.

## Component Architecture

### Atomic Design Principles
Structure your components using atomic design methodology:
- **Atoms**: Basic building blocks (buttons, inputs)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components
- **Templates**: Page-level layouts
- **Pages**: Specific instances of templates`,
        date: "2024-01-10",
    },
    {
        id: 4,
        title: "TypeScript Best Practices",
        author: "Code Quality",
        initials: "CQ",
        timeAgo: "1w",
        category: "TypeScript",
        tags: ["TypeScript", "JavaScript", "Type Safety", "Development", "Best Practices"],
        readTime: "10 min read",
        content: `Master TypeScript with these essential best practices that will make your code more maintainable, robust, and developer-friendly.

# TypeScript Best Practices

TypeScript has become essential for modern JavaScript development. Here are the best practices that will make your code more maintainable and robust.

## Type Definitions

### Interface vs Type Aliases
Use interfaces for object shapes that might be extended:

\`\`\`typescript
interface User {
  id: string
  name: string
  email: string
}
\`\`\``,
        date: "2024-01-08",
    },
    {
        id: 5,
        title: "Web Performance Optimization",
        author: "Performance Pro",
        initials: "PP",
        timeAgo: "2w",
        category: "Performance",
        tags: ["Performance", "Core Web Vitals", "Optimization", "SEO", "User Experience"],
        readTime: "15 min read",
        content: `Comprehensive guide to optimizing web performance, covering Core Web Vitals, image optimization, and bundle size reduction techniques.

# Web Performance Optimization

Performance is crucial for user experience and SEO. Here's a comprehensive guide to optimizing your web applications.

## Core Web Vitals

Focus on the three key metrics:

### Largest Contentful Paint (LCP)
- Optimize images with modern formats (WebP, AVIF)
- Use CDN for faster content delivery
- Implement lazy loading for below-the-fold content`,
        date: "2024-01-05",
    },
]

export default function PostsList() {
    const [selectedPost, setSelectedPost] = useState(samplePosts[0])
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = samplePosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div
                className="bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden"
                style={{ backgroundColor: "#2563eb" }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
                    style={{ backgroundColor: "#2563eb" }}>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
                    <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <BookOpen className="h-4 w-4 text-blue-200" />
                            <span className="text-sm font-medium text-blue-100">Developer Knowledge Hub</span>
                        </div>
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white"
                            style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                        >
                            Discover Amazing
                            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Content
              </span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl mb-4 text-pretty max-w-3xl mx-auto leading-relaxed text-blue-50"
                            style={{ color: "#f0f9ff", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
                        >
                            Explore our curated collection of articles, tutorials, and insights from the world of modern development
                        </p>
                        <div
                            className="flex items-center justify-center gap-6 text-sm mb-12 text-blue-50"
                            style={{ color: "#f0f9ff" }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>Updated Daily</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <span style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>Expert Authors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                <span style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>Free Access</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-3 shadow-lg">
                                        <Search className="h-5 w-5 text-white" />
                                    </div>
                                    <Input
                                        placeholder="Search articles, tutorials, guides, and more..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 border-0 bg-transparent text-lg text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:outline-none h-12"
                                    />
                                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 h-10 rounded-xl shadow-lg font-medium transition-all duration-200 hover:shadow-xl">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-blue-100 text-sm font-medium">{filteredPosts.length} articles available</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <BookOpen className="h-3 w-3 text-blue-200" />
                                <span className="text-blue-100 text-sm font-medium">5+ categories</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                        {/* Left Sidebar - PostDto List */}
                        <div className="lg:col-span-2 border-r border-gray-200 dark:border-gray-700">
                            {/* Header with filters */}
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {filteredPosts.length} results
                  </span>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-xs bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                                        >
                                            <ArrowUpDown className="h-3 w-3 mr-1" />
                                            RELEVANT
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-xs text-gray-600 border-gray-300 hover:bg-gray-100 bg-transparent"
                                        >
                                            RECENT
                                        </Button>
                                        <Button variant="default" size="sm" className="h-8 px-3 text-xs bg-blue-600 hover:bg-blue-700">
                                            APPLY
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* PostDto List */}
                            <div className="overflow-y-auto h-[500px]">
                                {filteredPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                            selectedPost.id === post.id ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500" : ""
                                        }`}
                                        onClick={() => setSelectedPost(post)}
                                    >
                                        <div className="flex items-start gap-3">
                                            {/* Author Initials Circle */}
                                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{post.initials}</span>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight mb-1">
                                                    {post.title}
                                                </h3>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{post.author}</p>
                                                <div className="flex items-center justify-between">
                                                    <Badge variant="secondary" className="text-xs">
                                                        {post.category}
                                                    </Badge>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.timeAgo}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content Panel */}
                        <div className="lg:col-span-3">
                            {/* Hero Section with Background */}
                            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2">
                                            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                                                <span className="font-bold text-black text-sm">{selectedPost.initials}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-bold mb-2 text-balance">{selectedPost.title}</h1>
                                    <p className="text-blue-100 text-sm">{selectedPost.author}</p>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 overflow-y-auto h-[352px]">
                                {/* Article Meta */}
                                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>{selectedPost.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>{selectedPost.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span>Published {selectedPost.timeAgo}</span>
                                    </div>
                                </div>

                                {/* Tags Section */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedPost.tags.map((tag, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                                    <div className="whitespace-pre-wrap text-pretty leading-relaxed">{selectedPost.content}</div>
                                </div>

                                {/* Author Info Section */}
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">About the Author</h3>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {selectedPost.initials}
                        </span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white text-sm">{selectedPost.author}</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                    Passionate about sharing knowledge and helping developers grow their skills.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
