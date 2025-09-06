'use client';
import {Badge} from '@/components/ui/badge';
import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {Column, ColumnDef} from '@tanstack/react-table';
import {CheckCircle2, Text, XCircle} from 'lucide-react';
import Image from 'next/image';
import {CellAction} from './cell-action';
import {CATEGORY_OPTIONS} from './options';
import {Product} from "@/app/dashboard/posts/_lib/product.types";
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";

export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        size: 32,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'photo_url',
        header: 'Image',
        cell: ({row}) => {
            return (
                <div className='relative aspect-square'>
                    <Image
                        src={row.getValue('photo_url')}
                        alt={row.getValue('name')}
                        fill
                        className='rounded-lg'
                    />
                </div>
            );
        },
        meta: {
            label: 'Image',
        }
    },
    {
        id: 'name',
        accessorKey: 'name',
        header: ({column}: { column: Column<Product, unknown> }) => (
            <DataTableColumnHeader column={column} title='Name'/>
        ),
        cell: ({cell}) => <div>{cell.getValue<Product['name']>()}</div>,
        meta: {
            label: 'Name',
            placeholder: 'Search products...',
            variant: 'text',
            icon: Text
        },
        enableColumnFilter: true
    },
    {
        id: 'category',
        accessorKey: 'category',
        header: ({column}: { column: Column<Product, unknown> }) => (
            <DataTableColumnHeader column={column} title='Category'/>
        ),
        cell: ({cell}) => {
            const status = cell.getValue<Product['category']>();
            const Icon = status === 'active' ? CheckCircle2 : XCircle;

            return (
                <Badge variant='outline' className='capitalize'>
                    <Icon/>
                    {status}
                </Badge>
            );
        },
        enableColumnFilter: true,
        meta: {
            label: 'Categories',
            variant: 'multiSelect',
            options: CATEGORY_OPTIONS
        }
    },
    {
        accessorKey: 'price',
        header: 'Price',
        meta : {
            label: 'Price',
        },
    },
    {
        accessorKey: 'description',
        header: 'Description',
        meta : {
            label: 'Description',
        }
    },
    {
        id: 'actions',
        cell: ({row}) => <CellAction data={row.original}/>
    }
];