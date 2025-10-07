import {useQueryStates} from "nuqs";
import {postSearch} from "@/app/dashboard/posts/_lib/post.search";

export function usePostSearchParams() {
    const [queryParams, setQueryParams] = useQueryStates(
        postSearch.definition,
        {
            // history: "push",
            // shallow: false,
        }
    );

    const queryString = postSearch.serialize(queryParams);

    // Exclude 'page' from the query string for certain uses (e.g., caching keys in infinite scroll)
    const { page, ...queryParamsForKey } = queryParams;
    const queryStringExcludingPage = postSearch.serialize(queryParamsForKey);

    return {
        queryParams,
        setQueryParams,
        queryString,
        queryStringExcludingPage
    };
}