import {envConfig} from "@/config/env";

export const siteData = {
    title: "My Awesome Site",
    subTitle: "A place to share my thoughts and projects",
    description: "This is an awesome site built with Next.js and TypeScript.",
    keywords: ["Next.js", "TypeScript", "Blog", "Tech", "Projects"],

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
}