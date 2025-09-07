import {PostTable} from './post-tables/data-table';
import {columns} from '@/app/dashboard/posts/_components/post-tables/columns';
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";

type PostListingPage = {};

export default async function PostListingPage({}: PostListingPage) {
    const postSearchParams = postSearch.cache.all();
    const data = await fakePosts.getPosts(postSearchParams);
    const totalPosts = data.total;
    const posts: PostDto[] = data.data;

    return (
        <PostTable
            data={posts}
            totalItems={totalPosts}
            columns={columns}
        />
    );
}