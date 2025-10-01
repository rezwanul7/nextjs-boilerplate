import {envConfig} from "@/config/env";

export async function fetchPosts(queryString?: string) {
    const isServer = typeof window === "undefined"; // true = server, false = browser
    const str = isServer ? "SERVER" : "BROWSER";

    const rand = Math.floor(Math.random() * 1000);
    console.log(`fetchPosts (${str}) (${rand}) - queryString:`, queryString);

    const res = await fetch(`${envConfig.baseUrl}/api/posts${queryString}`);

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    console.log(`resolved fetchPosts (${str}) (${rand}) - data:`, data);
    return data;
}