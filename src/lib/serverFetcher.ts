export class FetchError extends Error {
    status?: number;
    errors?: Record<string, string[]>; // optional field-specific errors

    constructor(message: string, status?: number, errors?: Record<string, string[]>) {
        super(message);
        this.name = "FetchError";
        this.status = status;
        this.errors = errors;
        Object.setPrototypeOf(this, FetchError.prototype); // fixes prototype chain
    }
}

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            // Try to parse error message from response
            let errorMessage = `Request failed with status ${res.status}`;
            let errors: Record<string, string[]> | undefined = undefined;
            try {
                const data = await res.json();
                if (data?.message) errorMessage = data.message;
                if (data?.errors) errors = data.errors;
            } catch {
                // ignore JSON parsing errors
            }

            throw new FetchError(errorMessage, res.status, errors);
        }

        return (await res.json()) as T;
    } catch (err: any) {
        if (err instanceof FetchError) throw err;

        // For Network or other errors also map to FetchError
        throw new FetchError(err.message || "Unknown error occurred");
    }
}
