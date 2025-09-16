function getEnvVal(name: string): string {
    const value = process.env[name]
    const isServer = typeof window === "undefined"
    if (!value && isServer) {
        throw new Error(`Missing environment variable: ${name} in server env`)
    }
    return value || ""
}

export const envConfig = {
    baseUrl: getEnvVal("NEXT_PUBLIC_BASE_URL"),
    apiUrl: `${getEnvVal("NEXT_PUBLIC_BASE_URL")}/api`,
}

export const serverEnvConfig = {
    databaseUrl: getEnvVal("DATABASE_URL"),
}