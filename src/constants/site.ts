import {envConfig} from "@/config/env";

export const siteData = {
    name: "DevBlog",
    // Can be used for default meta title
    title: "Knowledge Hub for Developers",
    // Can be used for default meta description
    description: "Explore curated articles, tutorials, and insights from the world of modern development. Stay ahead with DevBlog - your knowledge hub for developers.",
    keywords: [
        "DevBlog",
        "developer blog",
        "knowledge hub",
        "programming tutorials",
        "software development insights",
    ],

    // Logo and branding
    logo: {
        text: "DevBlog",
        tagline: "Knowledge Hub",
    },

    // Author / creator
    authorName: "SM Rezwanul Islam",
    twitterHandle: "@rezwanul7",

    // URLs
    url: envConfig.baseUrl,       // Replace with your real domain
    repoUrl: "https://github.com/rezwanul7/micro-blog",
    authorUrl: "https://rezwanul7.github.io",
    ogImage: "/og-placeholder.png",             // Default OG image path

    // SEO / verification
    googleVerification: "",                 // Add Google Search Console code if needed

    footer: {
        copyright: `© ${new Date().getFullYear()} DevBlog. All rights reserved.`,
    }
}