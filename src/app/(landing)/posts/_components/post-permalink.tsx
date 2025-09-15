import Link from "next/link";
import {LinkIcon} from "lucide-react";
import {PostDto} from "@/app/dashboard/posts/_lib/post.dto";

export default function PostPermalink({ post }: { post: PostDto }) {
    // const searchParams = useSearchParams()
    // const params = new URLSearchParams(searchParams.toString())
    //
    // // Add or overwrite postId param
    // params.set("postId", String(postId))
    //
    // const href = `/?${params.toString()}`

    return (
        <Link
            href={`/posts/${post.slug}`}
            onClick={(e) => e.stopPropagation()} // so card click doesn’t trigger
            className="text-gray-400 hover:text-blue-500 transition-colors"
        >
            <LinkIcon size={14} />
        </Link>
    )
}