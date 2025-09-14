import {z} from "zod";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {UserSchema} from "@/app/dashboard/users/_lib/user.dto";
import {JSONContent} from "@tiptap/react";

// --- Reusable Meta Schema ---
export const PostMetaSchema = z
    .object({
        title: z.string()
            .min(3, "Title must be at least 3 characters")
            .max(60, "Title must be at most 60 characters"),
        description: z.string()
            .min(3, "Description must be at least 3 characters")
            .max(150, "Description must be at most 160 characters"),
        keywords: z.string().optional(),
        image: z.url().optional(),
    })
    .optional();

export const PostSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.custom<JSONContent>().nullable(),
    category: CategoryUtils.zodSchema,
    slug: z.string(),
    published: z.boolean(),
    authorId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    meta: PostMetaSchema,
});

// Extend PostSchema to include author
export const PostWithUserSchema = PostSchema.extend({
    author: UserSchema.optional(),
});

// Create DTO
export const CreatePostSchema = z.object({
    title: z.string()
        .min(3, "Title must be at least 3 characters"),

    content: z.custom<JSONContent>(),
    category: CategoryUtils.zodSchema,
    slug: z.string().min(3, "Slug must be at least 3 characters"),
    meta: PostMetaSchema,
    // published: z.boolean().default(false),
});


// Update DTO (partial)
export const UpdatePostSchema = CreatePostSchema.partial();

export type PostDto = z.infer<typeof PostWithUserSchema>;
export type CreatePostDto = z.infer<typeof CreatePostSchema>;
export type UpdatePostDto = z.infer<typeof UpdatePostSchema>;
export type PostMetaDto = z.infer<typeof PostMetaSchema>;