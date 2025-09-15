// Sample post data
export const samplePosts = [
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
