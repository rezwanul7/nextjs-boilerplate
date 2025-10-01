import type { MetadataRoute } from 'next';
import {envConfig} from "@/config/env";
import {postService} from "@/app/dashboard/posts/_lib/post.service";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = envConfig.baseUrl;

    const posts = await postService.getAllPosts();
    const postsSitemap = posts.map((post) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));


    // Define your static routes
    const routes: string[] = [
        '', // home page
        // '/about',
        // '/posts',
    ];

    // Create sitemap entries for static routes
    const staticRoutesSitemap = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // combine all the sitemap entries into a single array
    return [
        ...staticRoutesSitemap,
        ...postsSitemap,
    ];
}
