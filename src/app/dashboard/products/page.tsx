import {SearchParams} from "nuqs/server";
import ProductListingPage from "@/app/dashboard/products/_components/products-listing-page";
import type {Metadata} from "next";
import {Button} from "@/components/ui/button";
import {PageContainer} from "@/app/dashboard/_components/layout/page-container";
import PageHeader from "@/app/dashboard/_components/layout/page-header";
import {productSearch} from "@/app/dashboard/products/_lib/product.types";


export const metadata: Metadata = {
    title: 'Dashboard: Products'
};

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
    const searchParams = await props.searchParams;

    const parsed = productSearch.cache.parse(searchParams);

    // This key is used for invoke suspense if any of the search params changed (used for filters).
    const key = productSearch.serialize(parsed);

    return (
        <PageContainer>
            <PageHeader
                title="Products"
                description="A list of data (fetched using mock API)."
                actions={
                    <Button>Add Product</Button>
                }
            />

            <div className="@container/main flex flex-1 flex-col gap-2">
                {/*<Suspense*/}
                {/*    key={key}*/}
                {/*    fallback={*/}
                {/*        <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2}/>*/}
                {/*    }*/}
                {/*>*/}
                    <ProductListingPage/>
                {/*</Suspense>*/}
            </div>
        </PageContainer>
    )
}
