import {getEnvVal} from "@/lib/env.utils";


export const envConfig = {
    baseUrl: getEnvVal({name: "NEXT_PUBLIC_BASE_URL", isRequired: true}),
    apiUrl: `${getEnvVal({name: "NEXT_PUBLIC_BASE_URL", isRequired: true})}/api`,
}

export const serverEnvConfig = {
    databaseUrl: getEnvVal({name: "DATABASE_URL", isRequired: true}),
}