"use server";

import {prisma} from "@/lib/prisma";

import {ServerActionResult} from "@/types/server-action";
import {CreatePostSchema, PostDto, UpdatePostDto, UpdatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {auth} from "@clerk/nextjs/server";
import {getOrCreateCurrentUser} from "@/app/dashboard/users/_lib/services";
import {mergePostMeta} from "@/app/dashboard/posts/_lib/post.helper";
import {postService} from "@/app/dashboard/posts/_lib/post.service";
import {handleServerActionError} from "@/lib/errors/handler";

export async function createPost(formData: FormData): Promise<ServerActionResult<PostDto>> {
    try {
        const {userId} = await auth();
        if (!userId) return {success: false, message: "Unauthorized"};

        const author = await getOrCreateCurrentUser();

        const raw = Object.fromEntries(formData);
        if (raw.meta) {
            try {
                raw.meta = JSON.parse(raw.meta as string);
            } catch {
                delete raw.meta;
            }
        }

        const parsed = CreatePostSchema.parse(raw);
        const post = await postService.createPost(author.id, parsed);

        return {success: true, message: "Post created successfully", data: post};
    } catch (error) {
        return handleServerActionError(error);
    }
}


// Update Post Action
export async function updatePost(
    postId: number,
    formData: FormData
): Promise<ServerActionResult<null>> {
    try {
        const {userId} = await auth();
        if (!userId) return {success: false, message: "Unauthorized"};

        const author = await getOrCreateCurrentUser();

        // Ensure post exists
        const existing = await postService.getPostById(postId);

        if (!existing) return {success: false, message: "Post not found"};
        if (existing.authorId !== author.id) return {success: false, message: "Forbidden"};

        const raw = Object.fromEntries(formData);

        // Parse meta JSON if provided
        if (raw.meta) {
            try {
                raw.meta = JSON.parse(raw.meta as string);
            } catch {
                delete raw.meta;
            }
        }

        // Validate form
        const parsed = UpdatePostSchema.parse(raw as any) as UpdatePostDto;

        // Merge meta
        const mergedMeta = mergePostMeta(existing.meta, parsed.meta);

        // Update post
        await prisma.post.update({
            where: {id: postId},
            data: {
                ...parsed,
                meta: mergedMeta,
            },
        });

        return {success: true, message: "Post updated successfully", data: null};
    } catch (error) {
        return handleServerActionError(error);
    }
}