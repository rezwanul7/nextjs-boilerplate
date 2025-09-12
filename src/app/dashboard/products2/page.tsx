import type {Metadata} from "next";
import {DataTableDemo} from "@/app/dashboard/products2/_components/table-data-demo";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: 'Dashboard: Products'
};

export default async function Page() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <div className="p-6">
                        <Suspense fallback={<div>Loading...</div>}>
                            <DataTableDemo/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
