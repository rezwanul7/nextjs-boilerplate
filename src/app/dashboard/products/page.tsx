import {Suspense} from "react";
import {DataTableSkeleton} from "@/components/data-table/data-table-skeleton";
import {SearchParams} from "nuqs/server";
import {searchParamsCache} from '@/lib/searchparams';
import ProductListingPage from "@/app/dashboard/posts/_components/products-listing-page";
import type {Metadata} from "next";
import {DataTableDemo} from "@/app/dashboard/products/_components/table-data-demo";


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
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <div className="p-6">
                        <DataTableDemo />
                    </div>
                </div>
            </div>
        </div>
    )
}
