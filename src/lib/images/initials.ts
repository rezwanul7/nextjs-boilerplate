export function getInitials(firstName?: string | null, lastName?: string | null): string {
    const first = firstName?.trim() ?? "";
    const last = lastName?.trim() ?? "";

    if (first && last) {
        return `${first[0]}${last[0]}`.toUpperCase();
    }

    if (first) {
        // For single name, take first two letters if available
        return first.slice(0, 2).toUpperCase();
    }

    return "?"; // Fallback when no name is provided
}