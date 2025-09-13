"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {CreatePostDto, CreatePostSchema, PostDto} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {createPost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";
import {Form,} from "@/components/ui/form";
import InputFormField from "@/components/form/input-form-field";
import {FormFooter} from "@/components/form/form-footer";
import {ComboboxFormField} from "@/components/form/combobox-form-field";
import {RichTextEditorInput} from "@/components/form/rich-text-editor-input";
import {mapValidationErrorsToRHF} from "@/lib/form/mapValidationErrorsToRHF";
import React from "react";
import {objectToFormData} from "@/lib/form/formData.utils";
import {useRouter} from "next/navigation";

export default function CreatePostForm() {
    const router = useRouter();
    const form = useForm<CreatePostDto>({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: "",
            content: undefined,
            category: undefined, // must be selected by user
            slug: "",
            // published: false,
        },
    });

    const {control, setError, formState: {errors}, handleSubmit} = form;

    const onSubmit = async (data: CreatePostDto) => {
        console.log("Form submitted:", data);

        const formData = objectToFormData(data);

        const result: ServerActionResult<PostDto> = await createPost(formData);

        if (result.success) {
            toast.success(result.message);
            router.push(`/dashboard/posts/${result.data?.id}/edit`);
        } else {

            // If there are server-side validation errors, map them to the form
            // setError("root.serverError", {type: "server", message: result.message})
            mapValidationErrorsToRHF(form.setError, result.errors);

            toast.error(result.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {errors.root?.serverError && (
                    <p className="text-red-500">
                        {errors.root.serverError.message}
                    </p>
                )}

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
                {/*/!* Meta Description *!/*/}
                {/*<InputFormField*/}
                {/*    control={form.control}*/}
                {/*    name="meta.description"*/}
                {/*    label="Meta Description"*/}
                {/*    placeholder="Meta description"*/}
                {/*/>*/}

                {/*/!* Meta Image *!/*/}
                {/*<InputFormField*/}
                {/*    control={form.control}*/}
                {/*    name="meta.image"*/}
                {/*    label="Meta Image URL"*/}
                {/*    placeholder="Meta image URL"*/}
                {/*/>*/}

                <FormFooter>
                    <Button type="submit"> Create Post</Button>
                </FormFooter>
            </form>
        </Form>
    );
}
