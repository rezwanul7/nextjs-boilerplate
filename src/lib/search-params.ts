import {
    createLoader,
    createSearchParamsCache,
    createSerializer,
    ParserBuilder,
} from "nuqs/server"

type SearchParamsDefinition = Record<string, ParserBuilder<any>>

export function createSearchParamsUtils<T extends SearchParamsDefinition>(
    definition: T,
) {
    return {
        definition,
        load: createLoader(definition),
        cache: createSearchParamsCache(definition),
        serialize: createSerializer(definition),
    }
}
