import {GetPostsSearchParamsDto} from "@/app/dashboard/posts/_lib/post.search";
import {prisma} from "@/lib/prisma";
import {paginate, PaginateResponse} from "@/lib/pagination-helper";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {Prisma} from "@prisma/client";

export async function searchPosts(params: GetPostsSearchParamsDto): Promise<PaginateResponse<PostDto>> {
    const {
        title,
        authorId,
        published,
        category,
        createdAt,

        // Pagination
        page,
        perPage,
        sort,
    } = params;

    // -------------------------
    // Build the where filters
    // -------------------------
    const where: any = {};

    if (title) {
        where.title = {contains: title, mode: "insensitive"};
    }

    if (published !== null) {
        where.published = published;
    }

    if (authorId) {
        where.authorId = authorId;
    }

    if (category && category.length > 0) {
        where.category = {in: category}; // filter by multiple categories
    }

    if (createdAt && createdAt.length === 2) {
        where.createdAt = {gte: new Date(createdAt[0]), lte: new Date(createdAt[1])};
    } else if (createdAt && createdAt.length === 1) {
        where.createdAt = {gte: new Date(createdAt[0])};
    }

    // -------------------------
    // Build orderBy
    // -------------------------
    let orderBy: any = {createdAt: "desc"}; // default
    if (Array.isArray(sort) && sort.length > 0) {
        orderBy = sort.map((s: { id: string; desc: boolean }) => ({
            [s.id]: s.desc ? "desc" : "asc",
        }));
    }

    return await paginate(prisma.post, {
        where,
        orderBy,
        page,
        pageSize: perPage,
        select: {
            id: true,
            title: true,
            published: true,
            category: true,
            slug: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                },
            },
        },
    }) as PaginateResponse<PostDto>;

}

export async function getCategoryCountsMap(
    where?: Prisma.PostWhereInput
): Promise<Record<string, number>> {
    const categoryCounts = await prisma.post.groupBy({
        by: ["category"],
        _count: {category: true},
        where,
    });

    return categoryCounts.reduce<Record<string, number>>((acc, curr) => {
        acc[curr.category] = curr._count.category;
        return acc;
    }, {});
}

