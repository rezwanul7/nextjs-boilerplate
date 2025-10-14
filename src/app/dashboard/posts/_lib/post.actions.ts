"use server";

import {ServerActionResult} from "@/types/server-action";
import {CreatePostSchema, PostDto, UpdatePostDto, UpdatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {auth} from "@clerk/nextjs/server";
import {getOrCreateCurrentUser} from "@/app/dashboard/users/_lib/services";
import {postService} from "@/app/dashboard/posts/_lib/post.service";
import {handleServerActionError} from "@/lib/errors/handler";

export async function createPost(formData: FormData): Promise<ServerActionResult<PostDto>> {
    try {
        const {userId} = await auth();
        if (!userId) return {success: false, message: "Unauthorized"};

        const author = await getOrCreateCurrentUser();

        const rawData = Object.fromEntries(formData) as Record<string, unknown>;

        // Parse meta JSON if provided
        const jsonFields = ["meta", "content"] as const;

        jsonFields.forEach((key) => {
            if (rawData[key]) {
                try {
                    rawData[key] = JSON.parse(rawData[key] as string);
                } catch {
                    // remove invalid JSON field
                    delete rawData[key];
                }
            }
        });

        const parsedData = CreatePostSchema.parse(rawData);

        const post = await postService.createPost(author.id, parsedData);

        return {success: true, message: "Post created successfully", data: post};
    } catch (error) {
        return handleServerActionError(error);
    }
}


// Update Post Action
export async function updatePost(
    postId: number,
    formData: FormData
): Promise<ServerActionResult<PostDto>> {
    try {
        const {userId} = await auth();
        if (!userId) return {success: false, message: "Unauthorized"};

        const author = await getOrCreateCurrentUser();

        const rawData = Object.fromEntries(formData) as Record<string, unknown>;

        // Parse meta JSON if provided
        const jsonFields = ["meta", "content"] as const;

        jsonFields.forEach((key) => {
            if (rawData[key]) {
                try {
                    rawData[key] = JSON.parse(rawData[key] as string);
                } catch {
                    // remove invalid JSON field
                    delete rawData[key];
                }
            }
        });


        // Validate form
        const parsedData = UpdatePostSchema.parse(rawData) as UpdatePostDto;

        // Update post
        const post = await postService.updatePost(postId, author.id, parsedData);

        return {success: true, message: "Post updated successfully", data: post};
    } catch (error) {
        return handleServerActionError(error);
    }
}

export async function publishPost(
    postId: number,
    published = true
): Promise<ServerActionResult<PostDto>> {
    try {
        const {userId} = await auth();
        if (!userId) return {success: false, message: "Unauthorized"};

        const author = await getOrCreateCurrentUser();

        // Update post
        const post = await postService.publishPost(postId, author.id, published);

        return {success: true, message: `Post ${published ? "published" : "unpublished"} successfully`, data: post};
    } catch (error) {
        return handleServerActionError(error);
    }
}


export async function unpublishPost(
    postId: number,
    published = true
): Promise<ServerActionResult<PostDto>> {
    return publishPost(postId, false);
}
