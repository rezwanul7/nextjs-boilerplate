import {ChevronRight, Clock, MessageCircle, Share2, Tag, User,} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import Link from "next/link"
import BlogPageHeader from "@/app/(landing)/posts/[slug]/_components/blog-page-header";
import BlogPageHero from "@/app/(landing)/posts/[slug]/_components/blog-page-hero";
import BlogPageLikeButton from "@/app/(landing)/posts/[slug]/_components/blog-page-like-button";
import {getPostBySlug} from "@/app/(landing)/posts/_lib/post.queries";
import {Metadata} from "next";

// Sample blog post data
const blogPost = {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    slug: "building-modern-web-applications-nextjs-15",
    author: {
        name: "Sarah Chen",
        avatar: "/professional-woman-developer.png",
        bio: "Senior Frontend Developer at TechCorp with 8+ years of experience in React and Next.js. Passionate about creating performant, accessible web applications.",
        initials: "SC",
        role: "Senior Frontend Developer",
        company: "TechCorp",
        socialLinks: {
            twitter: "@sarahchen",
            github: "sarahchen",
            linkedin: "sarahchen",
        },
    },
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-20",
    readTime: "12 min read",
    views: "2.4k",
    likes: 156,
    comments: 23,
    category: "Frontend Development",
    tags: ["Next.js", "React", "TypeScript", "Web Development", "Performance", "SSR"],
    excerpt:
        "Discover the latest features in Next.js 15 and learn how to build scalable, performant web applications with modern development practices.",
    content: `
# Building Modern Web Applications with Next.js 15

Next.js 15 represents a significant leap forward in React-based web development, introducing powerful features that make building scalable, performant applications easier than ever. In this comprehensive guide, we'll explore the key improvements and demonstrate how to leverage them effectively.

## What's New in Next.js 15

### Enhanced App Router
The App Router continues to evolve with improved performance characteristics and better developer experience. Key improvements include:

- **Faster builds** with optimized bundling
- **Improved caching strategies** for better performance
- **Enhanced server components** with better streaming support

### Turbopack Integration
Turbopack is now more stable and provides significantly faster build times:

\`\`\`bash
# Development builds are now up to 700% faster
npm run dev
\`\`\`

### Advanced TypeScript Support
Next.js 15 includes enhanced TypeScript integration:

- Better type inference for server components
- Improved error messages and debugging
- Enhanced IDE support with better autocomplete

## Getting Started

To create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm run dev
\`\`\`

## Key Features Deep Dive

### Server Components by Default
Server Components are now the default, providing better performance and SEO:

\`\`\`tsx
// This runs on the server by default
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 15</h1>
      <ServerComponent />
    </div>
  )
}
\`\`\`

### Improved Data Fetching
The new data fetching patterns are more intuitive:

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // Built-in caching
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
\`\`\`

## Performance Optimizations

### Automatic Image Optimization
Next.js 15 includes enhanced image optimization:

\`\`\`tsx
import Image from 'next/image'

export default function Gallery() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority // Loads immediately
    />
  )
}
\`\`\`

### Bundle Optimization
The new bundler provides:
- Smaller bundle sizes
- Better tree shaking
- Improved code splitting

## Best Practices

### 1. Use Server Components When Possible
Server Components reduce client-side JavaScript and improve performance.

### 2. Implement Proper Error Boundaries
Always include error handling for better user experience.

### 3. Optimize for Core Web Vitals
Focus on LCP, FID, and CLS metrics for better SEO and user experience.

## Migration Guide

If you're upgrading from Next.js 14:

1. Update your dependencies
2. Review breaking changes
3. Test your application thoroughly
4. Update your deployment configuration

## Conclusion

Next.js 15 brings significant improvements that make it easier to build modern, performant web applications. The enhanced App Router, improved TypeScript support, and better performance characteristics make it an excellent choice for your next project.

Whether you're building a simple blog or a complex enterprise application, Next.js 15 provides the tools and performance you need to succeed.
  `,
    relatedPosts: [
        {
            id: 2,
            title: "React Server Components Explained",
            slug: "react-server-components-explained",
            readTime: "8 min read",
            category: "React",
            excerpt: "Deep dive into React Server Components and how they revolutionize web development.",
            publishedAt: "2024-01-10",
            author: "Mike Johnson",
        },
        {
            id: 3,
            title: "TypeScript Best Practices for 2024",
            slug: "typescript-best-practices-2024",
            readTime: "10 min read",
            category: "TypeScript",
            excerpt: "Essential TypeScript patterns and practices for modern development.",
            publishedAt: "2024-01-08",
            author: "Emma Davis",
        },
        {
            id: 4,
            title: "Web Performance Optimization Guide",
            slug: "web-performance-optimization-guide",
            readTime: "15 min read",
            category: "Performance",
            excerpt: "Complete guide to optimizing web performance for better user experience.",
            publishedAt: "2024-01-05",
            author: "Alex Rodriguez",
        },
        {
            id: 5,
            title: "Modern CSS Techniques in 2024",
            slug: "modern-css-techniques-2024",
            readTime: "12 min read",
            category: "CSS",
            excerpt: "Explore the latest CSS features and techniques for modern web design.",
            publishedAt: "2024-01-03",
            author: "Lisa Wang",
        },
        {
            id: 6,
            title: "Building Accessible Web Applications",
            slug: "building-accessible-web-applications",
            readTime: "14 min read",
            category: "Accessibility",
            excerpt: "Essential guide to creating inclusive and accessible web experiences.",
            publishedAt: "2024-01-01",
            author: "David Kim",
        },
    ],
}

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;

    const blog = await getPostBySlug(slug);
    if (!blog) {
        return {title: "Blog not found"};
    }

    const title = blog.title || "Blog Post";
    const description = blog.content?.slice(0, 150) || "Read this amazing blog post.";
    const image = blog.meta?.image || "/placeholder.png";
    
    const url = `/blog/${params.slug}`;

    return {
        title: title,
        description: description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            type: "article",
            url,
            title: title,
            description: description,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [image],
        },
    };
}

export default async function Page(props: {
    params: Promise<{ slug: string }>
}) {
    const params = await props.params;
    const slug = params.slug;

    const post = await getPostBySlug(slug);
    if (!post) {
        throw new Error("Post not found");
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <BlogPageHeader/>
            <BlogPageHero
                likes={blogPost.likes}
                comments={blogPost.comments}
                views={blogPost.views}
                category={blogPost.category}
                title={post.title}
                excerpt={blogPost.excerpt}
                publishedAt={blogPost.publishedAt}
                readTime={blogPost.readTime}
                author={blogPost.author}
            />

            <main className="container mx-auto px-4 py-16 max-w-4xl">
                <article>
                    <div
                        className="prose prose-xl max-w-none prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-pre:text-slate-900 dark:prose-pre:text-slate-100 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-blockquote:border-blue-200 dark:prose-blockquote:border-blue-800">
                        <div className="whitespace-pre-wrap text-pretty leading-relaxed">
                            {post.content}
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-slate-100">
                            <Tag className="h-6 w-6 text-blue-600"/>
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {blogPost.tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-all duration-200 border-slate-300 dark:border-slate-600"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div
                        className="mt-16 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-slate-100">
                            <User className="h-6 w-6 text-blue-600"/>
                            About the Author
                        </h3>
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <Avatar className="h-20 w-20 ring-4 ring-blue-100 dark:ring-blue-900">
                                <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"}
                                             alt={blogPost.author.name}/>
                                <AvatarFallback className="bg-blue-600 text-white font-bold text-2xl">
                                    {blogPost.author.initials}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="mb-4">
                                    <p className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-1">{blogPost.author.name}</p>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                                        {blogPost.author.role} at {blogPost.author.company}
                                    </p>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 text-pretty leading-relaxed mb-4">
                                    {blogPost.author.bio}
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">Follow:</span>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        {blogPost.author.socialLinks.twitter}
                                    </a>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        {blogPost.author.socialLinks.github}
                                    </a>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        {blogPost.author.socialLinks.linkedin}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl border border-blue-200 dark:border-slate-600">
                        <div className="flex items-center gap-4">
                            <BlogPageLikeButton likes={blogPost.likes}/>
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-3 px-6 py-3 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 bg-transparent"
                            >
                                <MessageCircle className="h-5 w-5"/>
                                {blogPost.comments} Comments
                            </Button>
                        </div>
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-3 px-6 py-3 hover:bg-green-50 hover:text-green-600 hover:border-green-300 bg-transparent"
                        >
                            <Share2 className="h-5 w-5"/>
                            Share Article
                        </Button>
                    </div>
                </article>
            </main>

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
                        {blogPost.relatedPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
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
                        <Link href="/search">
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
        </div>
    )
}
