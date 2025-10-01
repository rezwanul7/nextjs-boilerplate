type EnvVarOptions = {
    name: string
    default?: string
    isRequired?: boolean
}

export function getServerOnlyEnvVal({name, default: def, isRequired = false}: EnvVarOptions): string {
    const value = process.env[name] || def
    const isServer = typeof window === "undefined"

    // Prevent leaking server-only vars to the client
    if (!isServer) {
        throw new Error(`You are accessing a server-only environment variable (${name}) on the client-side.`)
    }

    // Enforce required variables
    if (!value && isRequired) {
        throw new Error(`Missing environment variable: ${name}`)
    }

    return value || ""
}