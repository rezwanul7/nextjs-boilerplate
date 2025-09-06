import {Suspense} from "react";
import {DataTableSkeleton} from "@/components/data-table/data-table-skeleton";
import {SearchParams} from "nuqs/server";
import {searchParamsCache} from '@/lib/searchparams';
import ProductListingPage from "@/app/dashboard/posts/_components/products-listing-page";
import type {Metadata} from "next";
import {Button} from "@/components/ui/button";
import {PageContainer} from "@/app/dashboard/_components/layout/page-container";
import PageHeader from "@/app/dashboard/_components/layout/page-header";


export const metadata: Metadata = {
    title: 'Dashboard: Products'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;
    // Allow nested RSCs to access the search params (in a type-safe way)
    searchParamsCache.parse(searchParams);

    // This key is used for invoke suspense if any of the search params changed (used for filters).
    // const key = serialize({ ...searchParams });

    return (
        <PageContainer>
            <PageHeader
                title="Tasks"
                description="Here&apos;s a list of your tasks for this month!"
                actions={
                    <Button>Add Task</Button>
                }
            />

            <Suspense
                // key={key}
                fallback={
                    <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2}/>
                }
            >
                <ProductListingPage/>
            </Suspense>
        </PageContainer>
    )
}
