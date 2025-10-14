'use client'

import {toast} from 'sonner'
import {publishPost, unpublishPost} from "@/app/dashboard/posts/_lib/post.actions";

export async function handlePublish(postId: number, isPublished: boolean) {
    try {
        const result = isPublished
            ? await unpublishPost(postId)
            : await publishPost(postId)

        if (!result.success) throw new Error(result.message)

        toast.success(result.message)
        return result
    } catch (err: any) {
        toast.error(err.message || 'Something went wrong')
    }
}

// export async function handleDelete(postId: number, deleteFn: (id: number) => Promise<any>) {
//     try {
//         const result = await deleteFn(postId)
//         if (!result.success) throw new Error(result.message)
//
//         toast.success('Post deleted')
//         return result
//     } catch (err: any) {
//         toast.error(err.message || 'Failed to delete post')
//     }
// }