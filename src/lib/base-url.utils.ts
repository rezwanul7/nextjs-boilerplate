import {getEnvVal} from "@/lib/env.utils";

export const getBaseUrl = () => {
    const vercelUrl = getEnvVal({name: "VERCEL_URL"});
    if (vercelUrl) return `https://${vercelUrl}`;

    const renderUrl = getEnvVal({name: "RENDER_EXTERNAL_URL"});
    if (renderUrl) return renderUrl;

    return getEnvVal({name: "NEXT_PUBLIC_BASE_URL", isRequired: true});
}