import {PostMetaDto} from "@/app/dashboard/posts/_lib/post.dto";

/**
 * Merge new meta into existing meta safely
 */
export function mergePostMeta(existing?: PostMetaDto | null, incoming?: PostMetaDto): PostMetaDto | undefined {
    if (!incoming) return existing ?? undefined;
    return {
        ...(existing ?? {}),
        ...incoming,
    };
}
