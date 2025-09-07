import {GetPostsSearchParamsDto} from "@/app/dashboard/posts/_lib/post.search";

export async function getPosts(params: GetPostsSearchParamsDto) {
    const {page, perPage: limit, name: search, category: categories} = params;
    const categoriesArray = categories ? categories.split(',') : [];


    return await fakePosts.getPosts({
        page,
        limit,
        search: search ?? undefined,
        categories: categories ?? undefined,
    });
}