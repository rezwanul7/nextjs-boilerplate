"use client";

import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {CreatePostDto, CreatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {createPost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";

export default function CreatePostForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<CreatePostDto>({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: "",
            content: "",
            category: undefined, // must be selected by user
            slug: "",
            meta: {
                description: "",
                image: "",
            },
            // published: false,
        },
    });

    const onSubmit = async (data: CreatePostDto) => {
        console.log("Form submitted:", data);

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "meta") {
                formData.set(key, JSON.stringify(value));
            } else {
                formData.set(key, value as any);
            }
        });

        const result: ServerActionResult<null> = await createPost(formData);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
                <label htmlFor="title" className="mb-2 block text-lg">
                    Title
                </label>
                <Input id="title" {...register("title")} />
                {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                )}
            </div>

            {/* Content */}
            <div>
                <label htmlFor="content" className="mb-2 block text-lg">
                    Content
                </label>
                <Textarea id="content" {...register("content")} rows={6}/>
                {errors.content && (
                    <p className="text-red-500">{errors.content.message}</p>
                )}
            </div>

            {/* Category (controlled with Controller) */}
            <div>
                <label htmlFor="category" className="mb-2 block text-lg">
                    Category
                </label>
                <Controller
                    name="category"
                    control={control}
                    render={({field}) => (
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category"/>
                            </SelectTrigger>
                            <SelectContent>
                                {CategoryUtils.getValues().map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {CategoryUtils.getOptions([cat])[0].label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.category && (
                    <p className="text-red-500">{errors.category.message}</p>
                )}
            </div>

            {/* Slug */}
            <div>
                <label htmlFor="slug" className="mb-2 block text-lg">
                    Slug
                </label>
                <Input id="slug" {...register("slug")} />
                {errors.slug && (
                    <p className="text-red-500">{errors.slug.message}</p>
                )}
            </div>

            {/* Meta Description */}
            <div>
                <label htmlFor="meta.description" className="mb-2 block text-lg">
                    Meta Description
                </label>
                <Input id="meta.description" {...register("meta.description")} />
                {errors.meta?.description && (
                    <p className="text-red-500">{errors.meta.description.message}</p>
                )}
            </div>

            {/* Meta Image */}
            <div>
                <label htmlFor="meta.image" className="mb-2 block text-lg">
                    Meta Image URL
                </label>
                <Input id="meta.image" {...register("meta.image")} />
                {errors.meta?.image && (
                    <p className="text-red-500">{errors.meta.image.message}</p>
                )}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
                Create Post
            </Button>
        </form>
    );
}
