import {PostTable} from './post-tables/data-table';
import {columns} from '@/app/dashboard/posts/_components/post-tables/columns';
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import {searchPosts} from "@/app/dashboard/posts/_lib/post.queries";

type PostListingPage = {};

export default async function PostListingPage({}: PostListingPage) {
    const postSearchParams = postSearch.cache.all();
    const {items, total} = await searchPosts(postSearchParams);

    return (
        <PostTable
            data={items}
            totalItems={total}
            columns={columns}
        />
    );
}