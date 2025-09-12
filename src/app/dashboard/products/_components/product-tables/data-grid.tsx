'use client';

import {DataTableToolbar} from '@/components/data-table/data-table-toolbar';
import {useDataTable} from '@/hooks/use-data-table';
import {ColumnDef} from '@tanstack/react-table';
import {parseAsInteger, useQueryState} from 'nuqs';
import {DataGrid} from "@/components/data-grid/data-grid";
import * as React from "react";
import {Product} from "@/app/dashboard/products/_lib/product.types";
import CustomSearch from "@/app/dashboard/products/_components/product-tables/custom-search";

interface ProductGridParams<TData, TValue> {
    data: TData[];
    totalItems: number;
    columns: ColumnDef<TData, TValue>[];
}

export function ProductGrid<TData, TValue>({data, totalItems, columns}: ProductGridParams<TData, TValue>) {
    const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));

    const pageCount = Math.ceil(totalItems / pageSize);

    const {table} = useDataTable({
        data, // product data
        columns, // product columns
        pageCount: pageCount,
        shallow: false, //Setting to false triggers a network request with the updated querystring.
        debounceMs: 500
    });

    return (
        <DataGrid
            table={table}
            renderCard={(row) => {
                const product = row.original as Product;

                return (
                    <div
                        className="flex flex-col h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md overflow-hidden transition cursor-pointer">
                        {/* Product Image */}
                        <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                            <img
                                src={product.photo_url}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-col flex-1 p-4 gap-2">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                                {product.name}
                            </h3>

                            <span className="text-xs text-gray-500 dark:text-gray-400">
            {product.category}
          </span>

                            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
                                {product.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between">
            <span className="font-medium text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
                                <span className="text-xs text-gray-400">
              {new Date(product.updated_at).toLocaleDateString()}
            </span>
                            </div>
                        </div>
                    </div>
                );
            }}
        >
            <CustomSearch/>
            <DataTableToolbar table={table}/>
        </DataGrid>
    );
}