import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

interface InputFormFieldProps {
    control: any;
    name: string;
    label?: string;
    placeholder: string;
    type?: string;
    description?: string;
    className?: string;
    inputClassname?: string;
}

export default function InputFormField({
                                           control,
                                           name,
                                           label,
                                           placeholder,
                                           type = "text",
                                           description,
                                           className,
                                           inputClassname,
                                       }: InputFormFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field, fieldState}) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input
                            className={inputClassname}
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage/>
                    {/*<FormErrorMessages error={fieldState.error}/>*/}
                    {description && <FormDescription>{description}</FormDescription>}
                </FormItem>
            )}
        />
    );
}