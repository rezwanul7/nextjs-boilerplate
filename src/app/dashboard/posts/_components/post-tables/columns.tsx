'use client';
import {Badge} from '@/components/ui/badge';
import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {Column, ColumnDef} from '@tanstack/react-table';
import {CalendarIcon, CheckCircle2, Text, XCircle} from 'lucide-react';
import Image from 'next/image';
import {CellAction} from './cell-action';
import {CATEGORY_OPTIONS} from './options';
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {formatDate} from "@/lib/format";

export const columns: ColumnDef<PostDto>[] = [
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
        id: 'title',
        accessorKey: 'title',
        header: ({column}: { column: Column<PostDto, unknown> }) => (
            <DataTableColumnHeader column={column} title='Title'/>
        ),
        cell: ({cell}) => <div>{cell.getValue<PostDto['title']>()}</div>,
        meta: {
            label: 'Title',
            placeholder: 'Search data...',
            variant: 'text',
            icon: Text
        },
        enableColumnFilter: true
    },
    {
        id: 'category',
        accessorKey: 'category',
        header: ({column}: { column: Column<PostDto, unknown> }) => (
            <DataTableColumnHeader column={column} title='Category'/>
        ),
        cell: ({cell}) => {
            const status = cell.getValue<PostDto['category']>();
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
            options: CategoryUtils.getSelectOptions()
        }
    },
    {
        accessorKey: 'slug',
        header: 'Slug',
        meta : {
            label: 'Slug',
        },
    },
    {
        id: "createdAt",
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ cell }) => formatDate(cell.getValue<Date>()),
        meta: {
            label: "Created At",
            variant: "dateRange",
            icon: CalendarIcon,
        },
        enableColumnFilter: true,
    },
    {
        id: 'actions',
        cell: ({row}) => <CellAction data={row.original}/>
    }
];