type EnvVarOptions = {
    name: string
    default?: string
    isRequired?: boolean
}

export function getEnvVal({name, default: def, isRequired = true}: EnvVarOptions): string {
    const value = process.env[name] || def
    const usingOnServerSide = typeof window === "undefined"

    // If the variable is explicitly required
    // Or it is being used/called on the server-side
    // then if it's value is missing, throw an error
    if (!value && (usingOnServerSide || isRequired)) {
        throw new Error(`Missing environment variable: ${name}`)
    }

    return value || ""
}