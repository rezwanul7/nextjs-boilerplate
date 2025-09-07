"use server";

import prisma from "@/lib/prisma";

import {ServerActionResult, ZodTreeifiedError} from "@/types/server-action";
import {CreatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {z, ZodError} from "zod";
import {auth} from "@clerk/nextjs/server";
import {getOrCreateCurrentUser} from "@/app/dashboard/users/_lib/services";

export async function createPost(formData: FormData): Promise<ServerActionResult<null>> {
    try {
        const {userId} = await auth();
        if (!userId) {
            return {success: false, message: "Unauthorized"};
        }

        const author = await getOrCreateCurrentUser();

        const raw = Object.fromEntries(formData);

        // Parse meta JSON if provided
        if (raw.meta) {
            try {
                raw.meta = JSON.parse(raw.meta as string);
            } catch {
                delete raw.meta; // remove the key
            }
        }

        const parsed = CreatePostSchema.parse(raw as any);

        await prisma.post.create({
            data: {
                title: parsed.title,
                content: parsed.content,
                category: parsed.category,
                slug: parsed.slug,
                meta: parsed.meta,
                // published: parsed.published,
                authorId: author.id,
            },
        });

        return {success: true, message: "Post created successfully", data: null};
    } catch (error) {
        if (error instanceof ZodError) {
            const tree: ZodTreeifiedError = z.treeifyError(error);
            return {success: false, message: "Validation error", errors: tree};
        }
        console.error(error);
        return {success: false, message: "Something went wrong"};
    }
}
