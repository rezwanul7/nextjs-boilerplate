import {Suspense} from "react";
import {DataTableSkeleton} from "@/components/data-table/data-table-skeleton";
import {SearchParams} from "nuqs/server";
import PostListingPage from "@/app/dashboard/posts/_components/posts-listing-page";
import type {Metadata} from "next";
import {PageContainer} from "@/app/dashboard/_components/layout/page-container";
import PageHeader from "@/app/dashboard/_components/layout/page-header";

import {postSearch} from "@/app/dashboard/posts/_lib/post.search";
import NavigateButton from "@/components/buttons/navigate-button";


export const metadata: Metadata = {
    title: 'Dashboard: Posts'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;

    // const parsed =
    postSearch.cache.parse(searchParams);

    // This key is used for invoke suspense if any of the search params changed (used for filters).
    // const key = postSearch.serialize(parsed);

    // await seedPosts("cmfa1dn2m0000p0kombiar3l0", 20);

    return (
        <PageContainer>
            <PageHeader
                title="Posts"
                description="A list of data (fetched using mock API)."
                actions={
                    <NavigateButton to="/dashboard/posts/create">
                        Add Post
                    </NavigateButton>
                }
            />

            <div className="@container/main flex flex-1 flex-col gap-2">
                <Suspense
                    // key={key}
                    fallback={
                        <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2}/>
                    }
                >
                    <PostListingPage/>
                </Suspense>
            </div>
        </PageContainer>
    )
}
