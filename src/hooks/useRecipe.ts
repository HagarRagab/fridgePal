import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../lib/spoonacular/api";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useRecipe(recipeId: number) {
    const {
        data: recipe,
        isLoading,
        error,
    } = useQuery({
        queryKey: [QUERY_KEYS.GET_RECIPE_BY_ID, recipeId],
        queryFn: () => getRecipe(recipeId),
    });

    return { recipe, isLoading, error };
}
