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

    return {
        queryParams,
        setQueryParams,
        queryString
    };
}