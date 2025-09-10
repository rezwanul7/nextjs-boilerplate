import {AppError} from "@/lib/errors/app-error";
import {ZodError} from "zod";

export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Forbidden") {
        super(message, 403);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}

export class ValidationError extends AppError {
    public readonly errors: Record<string, string[]>;

    constructor(message = "Validation error", errors: Record<string, string[]> = {}) {
        super(message, 400);
        this.errors = errors;
    }

    /**
     * Create a ValidationError directly from a ZodError.
     */
    static fromZod(error: ZodError, message = "Validation error"): ValidationError {
        const errors = error.issues.reduce((acc: Record<string, string[]>, issue) => {
            const pathKey = issue.path.join(".");
            if (!acc[pathKey]) {
                acc[pathKey] = [];
            }
            acc[pathKey].push(issue.message);
            return acc;
        }, {});
        return new ValidationError(message, errors);
    }
}

export class ConflictError extends AppError {
    public readonly field?: string;

    constructor(message = "Conflict", field?: string) {
        super(message, 409);
        this.field = field;
    }
}
