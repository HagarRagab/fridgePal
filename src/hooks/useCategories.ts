import { useQuery } from "@tanstack/react-query";
import type { Models } from "appwrite";

import { getCategories } from "../lib/appwrite/api";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useCategories() {
    const {
        data: categories,
        isLoading,
        error,
    } = useQuery<Models.DocumentList<Models.Document>>({
        queryKey: [QUERY_KEYS.GET_CATEGORIES],
        queryFn: getCategories,
        retry: false,
    });

    return { categories, isLoading, error };
}
