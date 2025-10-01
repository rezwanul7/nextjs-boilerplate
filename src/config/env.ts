import {getEnvVal} from "@/lib/env.utils";
import {getBaseUrl} from "@/lib/base-url.utils";

const baseUrl = getBaseUrl();

export const envConfig = {
    baseUrl: baseUrl,
    apiUrl: `${baseUrl}/api`,
}

export const serverEnvConfig = {
    databaseUrl: getEnvVal({name: "DATABASE_URL", isRequired: true}),
}