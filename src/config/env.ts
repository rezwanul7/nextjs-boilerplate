import {getBaseUrl} from "@/lib/base-url.utils";

const baseUrl = getBaseUrl();

// Define environment variables that can be used both on server and client
// but do not include any sensitive information here
// as this file will be included in the client bundle
export const envConfig = {
    isServer: typeof window === "undefined",
    baseUrl: baseUrl,
    apiUrl: `${baseUrl}/api`,
    isProductionEnv: (process.env.NODE_ENV || "development") === "production",
    displayAuth: (process.env.NEXT_PUBLIC_DISPLAY_AUTH || "false") === "true",
    debug: (process.env.NEXT_PUBLIC_DEBUG || "false") === "true",
}

if (envConfig.debug) {
    console.log("envConfig", envConfig);
}