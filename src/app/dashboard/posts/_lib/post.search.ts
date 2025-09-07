import {createSearchParamsUtils} from "@/lib/search-params";
import {parseAsInteger, parseAsString} from "nuqs/server";

// Query params for /posts endpoint
const postSearchParams = {
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    title: parseAsString,
    authorId: parseAsString,
};

export const postSearch = createSearchParamsUtils(postSearchParams);

export type GetPostsSearchParamsDto = Awaited<
    ReturnType<typeof postSearch.cache.parse>
>;