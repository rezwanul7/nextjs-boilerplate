export const getBaseUrl = () => {
    const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
    const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
    const vercelProductionUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

    if (vercelEnv) return vercelEnv === "production" ? `https://${vercelProductionUrl}` : `https://${vercelUrl}`;

    const url = process.env.NEXT_PUBLIC_BASE_URL;

    if (!url) {
        throw new Error("Missing environment variable: NEXT_PUBLIC_BASE_URL");
    }

    return url;
}