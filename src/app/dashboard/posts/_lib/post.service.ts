import {CreatePostDto, PostDto, PostMetaDto, PostMetaSchema} from "./post.dto";
import {prisma} from "@/lib/prisma";
import {mergePostMeta} from "@/app/dashboard/posts/_lib/post.helper";

import {ConflictError, ForbiddenError, NotFoundError, ValidationError,} from "@/lib/errors";

export class PostService {
    async getPostById(postId: number): Promise<PostDto | null> {
        return await prisma.post.findUnique({
            where: {id: postId},
        }) as PostDto | null;
    }

    async createPost(authorId: string, data: CreatePostDto): Promise<PostDto> {

        try {
            // Persist to database
            return await prisma.post.create({
                data: {
                    title: data.title,
                    content: data.content,
                    category: data.category,
                    slug: data.slug,
                    // published: data.published,
                    authorId,
                },
            }) as PostDto;

        } catch (error: any) {
            // Handle slug conflict
            if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
                throw new ValidationError("Slug already exists, choose another one.", {
                    // "root.serverError": ["Validation error on slug field."],
                    slug: ["Slug already exists, choose another one."],
                });
            }
            throw error; // rethrow other unexpected errors
        }
    }

    async updatePost(postId: number, authorId: string, data: Partial<CreatePostDto>): Promise<PostDto> {

        const existing = await this.getPostById(postId);

        if (!existing) throw new NotFoundError("Post not found");
        if (existing.authorId !== authorId) throw new ForbiddenError();

        const mergedMeta = mergePostMeta(existing.meta as PostMetaDto | undefined, data.meta);

        console.log("data.content", data.content);

        try {
            return await prisma.post.update({
                where: {id: postId},
                data: {
                    ...data,
                    meta: mergedMeta,
                },
            }) as PostDto;

        } catch (error: any) {
            // Handle slug conflict
            if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
                throw new ConflictError("Slug already exists, choose another one.");
            }
            throw error;
        }
    }

    async deletePost(postId: number, authorId: string): Promise<PostDto> {
        const existing = await this.getPostById(postId);

        if (!existing) throw new NotFoundError("Post not found");
        if (existing.authorId !== authorId) throw new ForbiddenError();

        return await prisma.post.delete({
            where: {id: postId},
        }) as PostDto;
    }


    async publishPost(postId: number, authorId: any, published = true): Promise<PostDto> {
        const existing = await this.getPostById(postId);
        if (!existing) throw new Error("Post not found");

        return await prisma.post.update({
            where: {id: postId},
            data: {
                published: published,
            },
        }) as PostDto;
    }

    //
// if (error instanceof Prisma.PrismaClientKnownRequestError) {
//     if (
//         error.code === "P2002" &&
//         error.meta &&
//         Array.isArray((error.meta as any).target) &&
//         (error.meta as any).target.includes("slug")
//     ) {
//         // Slug already exists
//         return {success: false, message: "Slug already exists, choose another one."};
//     }
// }
}

export const postService = new PostService();