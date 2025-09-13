"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {PostDto, UpdatePostDto, UpdatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {updatePost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";
import {Form,} from "@/components/ui/form";
import {FormFooter} from "@/components/form/form-footer";
import {RichTextEditorInput} from "@/components/form/rich-text-editor-input";
import {objectToFormData} from "@/lib/form/formData.utils";

interface UpdatePostContentFormProps {
    post: PostDto
}

export default function UpdatePostContentForm({post}: UpdatePostContentFormProps) {
    const form = useForm<UpdatePostDto>({
        resolver: zodResolver(UpdatePostSchema),
        defaultValues: {
            content: post.content ?? undefined,
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
                {/* Content */}
                <RichTextEditorInput
                    name="content"
                    label="Content"
                    control={form.control}
                />

                <FormFooter>
                    <Button type="submit">Update Post</Button>
                </FormFooter>
            </form>
        </Form>
    );
}
