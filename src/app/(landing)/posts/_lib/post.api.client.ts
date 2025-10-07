import {envConfig} from "@/config/env";

export async function fetchPosts(queryString?: string) {
    const res = await fetch(`${envConfig.baseUrl}/api/posts${queryString}`);

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return await res.json();
}