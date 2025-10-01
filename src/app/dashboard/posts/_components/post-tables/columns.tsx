'use client';
import {Badge} from '@/components/ui/badge';
import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {Column, ColumnDef} from '@tanstack/react-table';
import {CalendarIcon, CheckCircle2, Text, XCircle} from 'lucide-react';
import {CellAction} from './cell-action';
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {formatDate} from "@/lib/format";
import Link from "next/link";

export const columns: ColumnDef<PostDto>[] = [
    {
        id: "select",
        header: ({table}) => (
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
        cell: ({row}) => (
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
        cell: ({cell}) => {
            const title = cell.getValue<PostDto['title']>();
            const id = cell.row.original.id;

            return (
                <Link href={`/dashboard/posts/${id}/edit`} prefetch={false}>
                    <div className="max-w-xs truncate" title={title}>
                        {title}
                    </div>
                </Link>
            )
        },
        meta: {
            label: 'Title',
            placeholder: 'Search data...',
            variant: 'text',
            icon: Text
        },
        enableColumnFilter: true
    },
    {
        id: "published",
        accessorKey: "published",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Published"/>
        ),
        cell: ({cell}) => {
            const isPublished = cell.getValue<boolean>();
            const Icon = isPublished ? CheckCircle2 : XCircle;
            const text = isPublished ? "Published" : "Unpublished";
            const color = isPublished ? "green" : "red";

            return (
                <Badge variant="outline" className="capitalize flex items-center gap-1" color={color}>
                    <Icon color={color}/>
                    {text}
                </Badge>
            );
        },
        enableColumnFilter: true,
        meta: {
            label: "Published",
            variant: "multiSelect",
            options: [
                {label: "Published", value: "true"},
                {label: "Unpublished", value: "false"},
            ],
        },
    },
    {
        id: 'category',
        accessorKey: 'category',
        header: ({column}: { column: Column<PostDto, unknown> }) => (
            <DataTableColumnHeader column={column} title='Category'/>
        ),
        cell: ({cell}) => {
            const category = cell.getValue<PostDto['category']>();

            return (
                <Badge variant='outline' className='capitalize'>
                    {category}
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
        id: "author",
        accessorKey: "author",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Author"/>
        ),
        cell: ({cell}) => {
            const author = cell.getValue<PostDto['author']>();
            return <div className="max-w-xs truncate" title={author?.firstName}>
                {author?.firstName}
            </div>
        },
        meta: {
            label: "Author",
            placeholder: "Search author...",
            variant: "text",
            icon: Text,
        },
        enableColumnFilter: false,
    },
    {
        id: "createdAt",
        accessorKey: "createdAt",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Created At"/>
        ),
        cell: ({cell}) => formatDate(cell.getValue<Date>()),
        meta: {
            label: "Created At",
            variant: "dateRange",
            icon: CalendarIcon,
        },
        enableColumnFilter: true,
    },
    {
        id: 'actions',
        cell: ({row}) => (
            <div className="flex justify-end">
                <CellAction data={row.original}/>
            </div>
        ),
    }
];