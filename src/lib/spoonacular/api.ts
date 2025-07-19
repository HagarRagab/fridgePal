export async function getRecipes(ingredients?: string) {
    if (!ingredients) return [];

    try {
        const res = await fetch(
            `${import.meta.env.VITE_SPOONACULAR_URL}/findByIngredients?apiKey=${
                import.meta.env.VITE_SPOONACULAR_API_KEY
            }&ingredients=${ingredients}`
        );

        if (!res.ok)
            throw new Error(
                "Something went wrong. Cannot get recipes. Please try again later."
            );

        const recipes = await res.json();
        return recipes;
    } catch (error) {
        console.error(error);
    }
}

export async function getRecipe(recipeId: number) {
    try {
        const res = await fetch(
            `${
                import.meta.env.VITE_SPOONACULAR_URL
            }/${recipeId}/information?apiKey=${
                import.meta.env.VITE_SPOONACULAR_API_KEY
            }`
        );

        if (!res.ok)
            throw new Error(
                "Something went wrong. Cannot get recipe details. Please try again later."
            );

        const recipe = await res.json();

        return recipe;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}
