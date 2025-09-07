import {z} from "zod";

export type ZodTreeifiedError = ReturnType<typeof z.treeifyError>;

export type ServerActionResult<TOutput> =
    | { success: true; message?: string; data: TOutput }
    | { success: false; message?: string; errors?: ZodTreeifiedError };