import {getServerOnlyEnvVal} from "@/lib/env.utils";

// Define Server-only variables
export const serverOnlyEnv = {
    databaseUrl: getServerOnlyEnvVal({name: "DATABASE_URL", isRequired: true}),
}