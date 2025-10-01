import type {MetadataRoute} from 'next';
import {envConfig} from "@/config/env";


const noIndexPaths = [
    '/ingest',      // posthog's reverse proxy
    '/ingest/*',    // posthog's reverse proxy
    '/dashboard',   // dashboard page
    '/dashboard/*', // all dashboard subpages
];

export default function robots(): MetadataRoute.Robots {
    // 🚨 IMPORTANT: if this is not a production environment, disallow all requests
    if (process.env.NODE_ENV !== 'production') {
        return {
            rules: [
                {
                    userAgent: '*',
                    disallow: '*',
                },
            ],
        };
    }

    return {
        rules: [
            {
                userAgent: '*',
                disallow: '/api/',       // Next.js API routes
            },
            {
                userAgent: '*',
                disallow: '/_next/',     // Next.js build output
            },
            {
                userAgent: '*',
                disallow: '/public/',    // static files like css, images, fonts. This one's up to you!
            },
            ...noIndexPaths.map((path) => ({
                userAgent: '*',
                disallow: path,
            })),
        ],
        sitemap: `${envConfig.baseUrl}/sitemap.xml`,
    };
}
