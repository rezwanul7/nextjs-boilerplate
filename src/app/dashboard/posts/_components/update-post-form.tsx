"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {PostDto, UpdatePostDto, UpdatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {updatePost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";
import {Form,} from "@/components/ui/form";
import InputFormField from "@/components/form/input-form-field";
import {FormFooter} from "@/components/form/form-footer";
import {ComboboxFormField} from "@/components/form/combobox-form-field";
import {RichTextEditorInput} from "@/components/form/rich-text-editor-input";

interface UpdatePostFormProps {
    post: PostDto
}

export default function UpdatePostForm({post}: UpdatePostFormProps) {
    const form = useForm<UpdatePostDto>({
        resolver: zodResolver(UpdatePostSchema),
        defaultValues: {
            title: post.title,
            content: post.content ?? undefined,
            category: undefined, // must be selected by user
            slug: post.slug,
            meta: {
                description: post.meta?.description ?? "",
                image: "",
            },
            // published: false,
        },
    });

    const onSubmit = async (data: UpdatePostDto) => {
        console.log("Form submitted:", data);

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "meta") {
                formData.set(key, JSON.stringify(value));
            } else {
                formData.set(key, value as any);
            }
        });

        const result: ServerActionResult<null> = await updatePost(post.id, formData);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Title */}
                <InputFormField
                    control={form.control}
                    name="title"
                    label="Title"
                    placeholder="Enter post title"
                />
                {/* Slug */}
                <InputFormField
                    control={form.control}
                    name="slug"
                    label="Slug"
                    placeholder="Enter post slug"
                />

                {/*/!* Content *!/*/}
                {/*<TextareaFormField*/}
                {/*    control={form.control}*/}
                {/*    name="content"*/}
                {/*    label="Content"*/}
                {/*    placeholder="Write your post content..."*/}
                {/*    rows={6}*/}
                {/*/>*/}


                {/* Category */}
                <ComboboxFormField
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select category"
                    values={CategoryUtils.getSelectOptions()}
                />


                <RichTextEditorInput
                    name="content"
                    label="Content"
                    control={form.control}
                />

                {/* Meta Description */}
                <InputFormField
                    control={form.control}
                    name="meta.description"
                    label="Meta Description"
                    placeholder="Meta description"
                />

                {/* Meta Image */}
                <InputFormField
                    control={form.control}
                    name="meta.image"
                    label="Meta Image URL"
                    placeholder="Meta image URL"
                />

                {/*<div className="flex w-full overflow-auto">*/}
                {/*    <SimpleEditor />*/}
                {/*</div>*/}
                <FormFooter>
                    <Button type="submit">Update Post</Button>
                </FormFooter>
            </form>
        </Form>
    );
}
