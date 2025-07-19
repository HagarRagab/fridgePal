import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../lib/spoonacular/api";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useRecipes(ingredients?: string) {
    const {
        data: recipes,
        isLoading,
        error,
    } = useQuery({
        queryKey: [(QUERY_KEYS.GET_RECIPES_BY_INGREDIENTS, ingredients)],
        queryFn: () => getRecipes(ingredients),
        enabled: !!ingredients,
    });

    return { recipes, isLoading, error };
}
