'use client';
import {AlertModal} from '@/components/modal/alert-modal';
import {Button} from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {IconDotsVertical, IconDownload, IconEdit, IconEye, IconTrash, IconUpload} from '@tabler/icons-react';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import Link from "next/link";
import {handlePublish} from "@/app/dashboard/posts/_lib/post.actions.client";

interface CellActionProps {
    data: PostDto;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter();

    const onConfirm = async () => {
        // handle delete here if needed
    }

    const onTogglePublish = async () => {
        setLoading(true)
        await handlePublish(data.id, data.published)
        setLoading(false)
        router.refresh()
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <IconDotsVertical className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    <DropdownMenuItem asChild>
                        <Link href={`/posts/${data.slug}`} className="cursor-pointer">
                            <IconEye className="mr-2 h-4 w-4" />
                            View
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => router.push(`/dashboard/posts/${data.id}/edit`)}
                    >
                        <IconEdit className='mr-2 h-4 w-4' /> Update
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={onTogglePublish}>
                        {data.published ? (
                            <>
                                <IconDownload className='mr-2 h-4 w-4' />
                                Unpublish
                            </>
                        ) : (
                            <>
                                <IconUpload className='mr-2 h-4 w-4' />
                                Publish
                            </>
                        )}
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <IconTrash className='mr-2 h-4 w-4' /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};