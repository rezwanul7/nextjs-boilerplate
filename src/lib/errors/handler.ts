// lib/errors/handler.ts
import {AppError} from "./app-error";
import {ValidationError} from "./index";
import {ZodError} from "zod";

export function handleServerActionError(error: unknown): {
    success: false;
    message?: string;
    errors?: Record<string, string[]>;
} {
    // Zod runtime errors
    if (error instanceof ZodError) {
        const validationError = ValidationError.fromZod(error);

        return {
            success: false,
            message: validationError.message,
            errors: validationError.errors,
        };
    }

    // AppError (operational errors)
    if (error instanceof AppError) {
        return {
            success: false,
            message: error.message,
            ...(error instanceof ValidationError ? {errors: error.errors} : {}),
        };
    }

    // Unexpected / unknown errors
    console.error(error);
    return {success: false, message: "Something went wrong"};
}
