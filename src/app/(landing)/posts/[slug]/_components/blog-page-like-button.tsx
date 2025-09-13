'use client';
import {Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState} from "react";

interface BlogPageLikeButtonProps {
    likes: number
}

export default function BlogPageLikeButton({likes}: BlogPageLikeButtonProps) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <Button
            variant={isLiked ? "default" : "outline"}
            size="lg"
            onClick={() => setIsLiked(!isLiked)}
            className={`gap-3 px-6 py-3 ${isLiked ? "bg-red-500 hover:bg-red-600 text-white" : "hover:bg-red-50 hover:text-red-600 hover:border-red-300"}`}
        >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`}/>
            {isLiked ? likes + 1 : likes} Likes
        </Button>
    )
}