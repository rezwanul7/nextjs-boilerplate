import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface TextareaFormFieldProps {
    control: any
    name: string
    label?: string
    placeholder?: string
    description?: string
    className?: string
    textareaClassname?: string
    rows?: number
}

export default function TextareaFormField({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              description,
                                              className,
                                              textareaClassname,
                                              rows = 4,
                                          }: TextareaFormFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Textarea
                            className={textareaClassname}
                            placeholder={placeholder}
                            rows={rows}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    {description && <FormDescription>{description}</FormDescription>}
                </FormItem>
            )}
        />
    )
}
