import {z} from "zod";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";

export const PostSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string().nullable(),
    category: z.string(),
    slug: z.string(),
    published: z.boolean(),
    authorId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

// Create DTO
export const CreatePostSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().min(20, "Content must be at least 10 characters"),
    category: CategoryUtils.zodSchema,
    slug: z.string().min(3, "Slug must be at least 3 characters"),
    meta: z
        .object({
            description: z.string().min(3, "Description must be at least 3 characters"),
            image: z.string().optional(),
        })
        .optional(),
    // published: z.boolean().default(false),
});


// Update DTO (partial)
export const UpdatePostSchema = CreatePostSchema.partial();

export type PostDto = z.infer<typeof PostSchema>;
export type CreatePostDto = z.infer<typeof CreatePostSchema>;
export type UpdatePostDto = z.infer<typeof UpdatePostSchema>;
