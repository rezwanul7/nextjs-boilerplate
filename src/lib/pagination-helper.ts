// import { Prisma } from "@prisma/client";
//
// // Define a union type of all model names available in Prisma
// export type ModelNames =
//     (typeof Prisma.ModelName)[keyof typeof Prisma.ModelName];
//
// // Define a type for Prisma operations specific to a given model
// type PrismaOperations<ModelName extends ModelNames> =
//     Prisma.TypeMap['model'][ModelName]['operations'];
//
// // Define a type for Prisma findMany arguments specific to a given model
// type PrismaFindManyArgs<ModelName extends ModelNames> =
//     PrismaOperations<ModelName>['findMany']['args'];

export type PaginateResponse<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};

export type PaginateOptions<TModel, TWhere = any, TInclude = any, TSelect = any> = {
    where?: TWhere;
    orderBy?: { [P in keyof TModel]?: "asc" | "desc" }[];
    page: number;
    pageSize: number;
} & (
    | { include?: TInclude; select?: never }   // include allowed, select forbidden
    | { include?: never; select?: TSelect }    // select allowed, include forbidden
    | { include?: never; select?: never }     // neither is also allowed
    );

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
    TWhere = any,
    TInclude = any,
    TSelect = any
>(
    model: {
        findMany: (args: {
            where?: TWhere;
            orderBy?: PaginateOptions<TModel>["orderBy"];
            take?: number;
            skip?: number;
            include?: TInclude;
            select?: TSelect;
        }) => Promise<TModel[]>;
        count: (args: { where?: TWhere }) => Promise<number>;
    },
    options: PaginateOptions<TModel, TWhere, TInclude, TSelect>
): Promise<PaginateResponse<TModel>> {
    const { where, orderBy, page, pageSize, include, select } = options;
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
        model.findMany({ where, orderBy, include, select, take: pageSize, skip }),
        model.count({ where }),
    ]);

    console.log(options);

    return {
        items,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
    };
}
