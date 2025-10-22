import {createSearchParamsUtils} from "@/lib/search-params";
import {parseAsArrayOf, parseAsBoolean, parseAsInteger, parseAsString, parseAsStringEnum} from "nuqs/server";
import {getSortingStateParser} from "@/lib/search-params.parsers";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";

// Query params for /posts endpoint
const postSearchParams = {
    title: parseAsString,
    authorId: parseAsString,
    published: parseAsBoolean,
    category: parseAsArrayOf(parseAsStringEnum(CategoryUtils.zodSchema.options)).withDefault([]),
    createdAt: parseAsArrayOf(parseAsInteger).withDefault([]),

    //
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    sort: getSortingStateParser<PostDto>(["title", "createdAt"])
        .withDefault([
            {id: "createdAt", desc: true}
        ]),

    // advanced filter
    // filters: getFiltersStateParser().withDefault([]),
    // joinOperator: parseAsStringEnum(['and', 'or']).withDefault('and')
};

export const postSearch = createSearchParamsUtils(postSearchParams);

export type GetPostsSearchParamsDto = Awaited<
    ReturnType<typeof postSearch.cache.parse>
>;