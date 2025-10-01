type EnvVarOptions = {
    name: string
    default?: string
    isRequired?: boolean
}

export function getEnvVal({name, default: def, isRequired = false}: EnvVarOptions): string {
    const value = process.env[name] || def
    const usingOnClientSide = !(typeof window === "undefined")

    // Prevent leaking server-only vars to the client
    if (usingOnClientSide && !name.startsWith("NEXT_PUBLIC_")) {
        throw new Error(`You are using a non-NEXT_PUBLIC_ environment variable (${name}) on the client-side.`)
    }

    // Enforce required variables
    if (!value && isRequired) {
        throw new Error(`Missing environment variable: ${name}`)
    }

    return value || ""
}