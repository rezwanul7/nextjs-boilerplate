import {z} from "zod";

export function createEnumHelpers<
    T extends Record<string, string>,
    D extends Record<T[keyof T], object>
>(enumObj: T, displayConfig: D) {
    const values = Object.values(enumObj) as T[keyof T][];

    return {
        /** Convert string to enum value or throw */
        toValue: (value: string): T[keyof T] => {
            if (!values.includes(value as T[keyof T])) {
                throw new Error(`Invalid enum value: ${value}`);
            }
            return value as T[keyof T];
        },

        /** Check if value exists */
        isValid: (value: string): value is T[keyof T] => values.includes(value as T[keyof T]),

        /** List all enum values */
        getValues: (): T[keyof T][] => [...values],

        /** Get options enriched with display config, optionally filtered by subset */
        getOptions: (subset?: T[keyof T][]): Array<{ value: T[keyof T] } & D[T[keyof T]]> => {
            const filtered = subset ? subset.filter((v) => values.includes(v)) : values;
            return filtered.map((v) => ({value: v, ...displayConfig[v]}));
        },


        /** Dedicated select options (label + value only) */
        getSelectOptions: (
            subset?: T[keyof T][]
        ): Array<{ label: string; value: T[keyof T] }> => {
            const filtered = subset ? subset.filter((v) => values.includes(v)) : values;
            return filtered.map((v) => ({
                value: v,
                label: (displayConfig[v] as any).label ?? v, // fallback to value if no label
            }));
        },

        /** Zod schema for validation */
        zodSchema: z.enum(values),
    };
}