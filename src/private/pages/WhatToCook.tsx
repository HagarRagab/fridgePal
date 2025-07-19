import { Grid } from "@mui/material";
import type { Models } from "appwrite";

import PageContainer from "../../components/dashboard/PageContainer";
import RecipeCard from "../../components/dashboard/RecipeCard";
import type { TRecipe } from "../../types";
import CardsGroup from "../../components/dashboard/CardsGroup";
import Spinner from "../../components/shared/Spinner";
import { useRecipes } from "../../hooks/useRecipes";
import NavTabs from "../../components/dashboard/NavTabs";
import PageTitle from "../../components/dashboard/PageTitle";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import NoResult from "../../components/shared/NoResult";

function WhatToCook() {
    const { currentUser, isLoading: isLoadingUser } = useGetCurrentUser();

    const ingredients = currentUser?.inventory
        ?.map((item: Models.Document) => item.name.toLowerCase())
        .join(",");

    const { recipes, isLoading: isLoadingRecipes } = useRecipes(ingredients);

    return (
        <>
            <NavTabs />
            {isLoadingUser || isLoadingRecipes ? (
                <Spinner sx={{ marginTop: "14rem" }} />
            ) : (
                <PageContainer>
                    <PageTitle
                        title="What to cook"
                        subTitle="Recipe suggestions based on your available ingredients"
                    />
                    {!ingredients ? (
                        <NoResult
                            title="No recipes recommendations"
                            subTitle="Add some items in your inventory."
                        />
                    ) : (
                        <CardsGroup>
                            {recipes &&
                                recipes?.length > 0 &&
                                recipes?.map((recipe: TRecipe) => (
                                    <Grid key={recipe.id}>
                                        <RecipeCard
                                            recipe={recipe}
                                            likedRecipes={currentUser?.likes}
                                        />
                                    </Grid>
                                ))}
                        </CardsGroup>
                    )}
                </PageContainer>
            )}
        </>
    );
}

export default WhatToCook;
