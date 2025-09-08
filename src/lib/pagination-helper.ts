export type PaginateResponse<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};

export type PaginateOptions<TModel, TWhere = any> = {
    where?: TWhere;
    orderBy?: { [P in keyof TModel]?: "asc" | "desc" }[];
    page: number;
    pageSize: number;
};

/**
 * Paginate helper for Prisma models.
 *
 * Example usage:
 *
 *  const response = await paginate<Post, Prisma.PostWhereInput>(prisma.post, {
 *     where: { published: true }, // ✅ type-safe
 *     orderBy: [
 *       { title: "asc" },         // ✅ only valid fields allowed
 *       { createdAt: "desc" },
 *     ],
 *     page: 1,
 *     pageSize: 10,
 *   });
 *
 *   console.log(response.items.at(0)?.title); // ✅ autocompletion works
 *
 * @template TModel The Prisma model type (e.g., Post)
 * @param model Prisma model (e.g., prisma.post)
 * @param options Paginate options including where, orderBy, page, and pageSize
 * @returns PaginateResponse<TModel> with items and metadata
 */
export async function paginate<
    TModel,
    TWhere = any
>(
    model: {
        findMany: (args: {
            where?: TWhere;
            orderBy?: PaginateOptions<TModel>["orderBy"];
            take?: number;
            skip?: number;
        }) => Promise<TModel[]>;
        count: (args: { where?: TWhere }) => Promise<number>;
    },
    {where, orderBy, page, pageSize}: PaginateOptions<TModel, TWhere>
): Promise<PaginateResponse<TModel>> {
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
        model.findMany({where, orderBy, take: pageSize, skip}),
        model.count({where}),
    ]);

    return {
        items,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
    };
}
