import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command"
import {Button} from "@/components/ui/button"
import {Check, ChevronsUpDown} from "lucide-react"
import {cn} from "@/lib/utils"

interface ComboboxFormFieldProps {
    control: any
    name: string
    label?: string
    placeholder?: string
    values: Array<{ label: string; value: string }>
}

export function ComboboxFormField({
                                      control,
                                      name,
                                      label,
                                      placeholder = "Select option...",
                                      values,
                                  }: ComboboxFormFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem className="flex flex-col">
                    {label && <FormLabel>{label}</FormLabel>}
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full justify-between font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? values.find((v) => v.value === field.value)?.label
                                        : placeholder}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput placeholder="Search..."/>
                                <CommandEmpty>No option found.</CommandEmpty>
                                <CommandGroup>
                                    {values.map((opt) => (
                                        <CommandItem
                                            key={opt.value}
                                            onSelect={() =>
                                                field.onChange(
                                                    field.value === opt.value ? undefined : opt.value // deselect if same value
                                                )
                                            }
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    field.value === opt.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {opt.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}
