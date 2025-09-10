import {FieldValues, UseFormSetError} from "react-hook-form";

/**
 * Maps ValidationError.errors into React Hook Form's setError calls.
 *
 * @param setError - The useForm().setError function
 * @param errors
 * @param takeAll - If true, sets all messages per field (default: false = only first message)
 */
export function mapValidationErrorsToRHF<TFieldValues extends FieldValues>(
    setError: UseFormSetError<TFieldValues>,
    errors?: Record<string, string[]>,
    takeAll = false
) {

    if (!errors) return;

    Object.entries(errors).forEach(([field, messages]) => {
        if (!messages.length) return;

        if (takeAll) {
            const types: Record<string, string> = {}

            messages.forEach((msg, idx) => {
                types[idx] = msg
            })

            setError(field as any, {
                types,
            })
        } else {
            // Only the first message
            setError(field as any, {
                type: "manual",
                message: messages[0],
            });
        }
    });
}
