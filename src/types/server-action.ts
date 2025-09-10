export type ServerActionResult<TOutput> =
    | { success: true; message?: string; data: TOutput }
    | { success: false; message?: string; errors?: Record<string, string[]> };