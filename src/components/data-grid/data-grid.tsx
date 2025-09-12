import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import type * as React from "react";

import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { cn } from "@/lib/utils";

interface DataGridProps<TData> extends React.ComponentProps<"div"> {
    table: TanstackTable<TData>;
    actionBar?: React.ReactNode;
    renderCard: (row: any) => React.ReactNode; // Function to render a single row as a card
}

export function DataGrid<TData>({
                                    table,
                                    actionBar,
                                    renderCard,
                                    className,
                                    children,
                                    ...props
                                }: DataGridProps<TData>) {
    const rows = table.getRowModel().rows;

    return (
        <div className={cn("flex w-full flex-col gap-4", className)} {...props}>
            {children}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rows?.length ? (
                    rows.map((row) => (
                        <div
                            key={row.id}
                            className={cn(
                                "border rounded-md p-4 shadow-sm transition hover:shadow-md cursor-pointer",
                                row.getIsSelected() ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                            )}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {renderCard(row)}
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center p-12 text-gray-500">
                        No results.
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2.5">
                <DataTablePagination table={table} />
                {actionBar && table.getFilteredSelectedRowModel().rows.length > 0 && actionBar}
            </div>
        </div>
    );
}
