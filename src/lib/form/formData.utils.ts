/**
 * Converts a JS object to FormData.
 * Automatically JSON.stringify objects and arrays.
 */
export function objectToFormData(
    data: Record<string, any>,
    formData: FormData = new FormData(),
    parentKey?: string
): FormData {
    Object.entries(data).forEach(([key, value]) => {
        const fieldKey = parentKey ? `${parentKey}[${key}]` : key;

        if (value === undefined || value === null) return;

        if (value instanceof File) {
            // keep files as-is
            formData.append(fieldKey, value);
        } else if (typeof value === "object") {
            // stringify objects/arrays
            formData.append(fieldKey, JSON.stringify(value));
        } else {
            formData.append(fieldKey, value as any);
        }
    });

    return formData;
}
