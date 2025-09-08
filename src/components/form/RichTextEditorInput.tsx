import React from "react"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { useController, Control } from "react-hook-form"
import { SimpleEditor as BaseEditor } from "@/components/tiptap-templates/simple/simple-editor"

interface RHFSimpleEditorProps {
    name: string
    control: Control<any>
    defaultValue?: string
    label?: string
    description?: string
    className?: string
}

export function RHFSimpleEditor({
                                    name,
                                    control,
                                    defaultValue = "",
                                    label,
                                    description,
                                    className,
                                }: RHFSimpleEditorProps) {
    const { field } = useController({ name, control, defaultValue })

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <div className="border rounded-md focus-within:ring-3 focus-within:ring-ring focus-within:ring-opacity-50 focus-within:border-input flex w-full overflow-auto">
                            {/*<div className="">*/}
                                <BaseEditor
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            {/*</div>*/}
                        </div>
                    </FormControl>

                    {description && <FormDescription>{description}</FormDescription>}

                    {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                </FormItem>
            )}
        />
    )
}