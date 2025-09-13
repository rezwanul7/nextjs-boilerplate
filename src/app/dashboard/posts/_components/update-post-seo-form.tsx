"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {PostDto, UpdatePostDto, UpdatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {updatePost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";
import {Form,} from "@/components/ui/form";
import InputFormField from "@/components/form/input-form-field";
import {FormFooter} from "@/components/form/form-footer";
import TextareaFormField from "@/components/form/textarea-form-field";
import {objectToFormData} from "@/lib/form/formData.utils";
import {getTextFromJSONContent} from "@/lib/tiptap.utils";

interface UpdatePostSeoFormProps {
    post: PostDto
}

export default function UpdatePostSeoForm({post}: UpdatePostSeoFormProps) {
    const postContent = post.content ? getTextFromJSONContent(post.content) : undefined;

    const title = post.meta?.title || post.title;
    const description = post.meta?.description || postContent || "";
    const keywords = post.meta?.keywords || "";


    const form = useForm<UpdatePostDto>({
        resolver: zodResolver(UpdatePostSchema),
        defaultValues: {
            meta: {
                title: title.slice(0, 60),
                description: description.slice(0, 150),
                keywords: keywords,
            },
        },
    });

    const onSubmit = async (data: UpdatePostDto) => {
        console.log("Form submitted:", data);

        const formData = objectToFormData(data);

        const result: ServerActionResult<PostDto> = await updatePost(post.id, formData);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Meta Title */}
                <InputFormField
                    control={form.control}
                    name="meta.title"
                    label="Meta Title"
                    placeholder="Write your meta title"
                />

                {/* Meta Keywords */}
                <InputFormField
                    control={form.control}
                    name="meta.keywords"
                    label="Meta Keywords"
                    placeholder="Enter keywords separated by commas"
                />

                {/* Meta Description */}
                <TextareaFormField
                    control={form.control}
                    name="meta.description"
                    label="Meta Description"
                    placeholder="Write your meta description"
                    rows={3}
                />

                <FormFooter>
                    <Button type="submit">Update Post</Button>
                </FormFooter>
            </form>
        </Form>
    );
}
