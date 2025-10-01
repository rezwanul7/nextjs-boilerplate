import {getEnvVal} from "@/lib/env.utils";

export const getBaseUrl = () => {
    const vercelEnv = getEnvVal({name: "VERCEL_ENV"});
    const vercelUrl = getEnvVal({name: "VERCEL_URL"});
    const vercelProductionUrl = getEnvVal({name: "VERCEL_PROJECT_PRODUCTION_URL"});

    if (vercelEnv) return vercelEnv === "production" ? `https://${vercelProductionUrl}` : `https://${vercelUrl}`;

    const renderUrl = getEnvVal({name: "RENDER_EXTERNAL_URL"});
    if (renderUrl) return renderUrl;

    return getEnvVal({name: "NEXT_PUBLIC_BASE_URL", isRequired: true});
}