"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {CreatePostDto, CreatePostSchema} from "@/app/dashboard/posts/_lib/post.dto";
import {CategoryUtils} from "@/app/dashboard/posts/_lib/category.utils";
import {createPost} from "@/app/dashboard/posts/_lib/post.actions";
import {ServerActionResult} from "@/types/server-action";
import {toast} from "sonner";
import {Form,} from "@/components/ui/form";
import InputFormField from "@/components/form/input-form-field";
import TextareaFormField from "@/components/form/textarea-form-field";
import {FormFooter} from "@/components/form/form-footer";
import {ComboboxFormField} from "@/components/form/combobox-form-field";
import {SimpleEditor} from "@/components/tiptap-templates/simple/simple-editor";

export default function CreatePostForm() {
    const form = useForm<CreatePostDto>({
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Title */}
                <InputFormField
                    control={form.control}
                    name="title"
                    label="Title"
                    placeholder="Enter post title"
                />

                {/* Content */}
                <TextareaFormField
                    control={form.control}
                    name="content"
                    label="Content"
                    placeholder="Write your post content..."
                    rows={6}
                />

                {/* Category */}
                <ComboboxFormField
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select category"
                    values={CategoryUtils.getSelectOptions()}
                />

                {/* Slug */}
                <InputFormField
                    control={form.control}
                    name="slug"
                    label="Slug"
                    placeholder="Enter post slug"
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

                <div className="flex w-full overflow-auto">
                    <SimpleEditor />
                </div>
                {/* Submit */}
                <FormFooter>
                    <Button type="submit">Create Post</Button>
                </FormFooter>
            </form>
        </Form>
    );
}
