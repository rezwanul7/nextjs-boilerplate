'use client';

import {DataTable} from '@/components/data-table/data-table';
import {DataTableToolbar} from '@/components/data-table/data-table-toolbar';
import {useDataTable} from '@/hooks/use-data-table';
import {ColumnDef} from '@tanstack/react-table';
import {parseAsInteger, useQueryState} from 'nuqs';

interface PostTableParams<TData, TValue> {
    data: TData[];
    totalItems: number;
    columns: ColumnDef<TData, TValue>[];
}

export function PostTable<TData, TValue>({data, totalItems, columns}: PostTableParams<TData, TValue>) {
    const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));

    const pageCount = Math.ceil(totalItems / pageSize);

    const {table} = useDataTable({
        data, // post data
        columns, // post columns
        pageCount: pageCount,
        shallow: false, //Setting to false triggers a network request with the updated querystring.
        debounceMs: 500
    });

    return (
        <DataTable table={table}>
            <DataTableToolbar table={table}/>
        </DataTable>
    );
}