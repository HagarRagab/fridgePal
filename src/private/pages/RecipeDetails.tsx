import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import styled from "styled-components";

import RecipeInfo from "../../components/dashboard/RecipeInfo";
import RecipeInfoChip from "../../components/dashboard/RecipeInfoChip";
import RecipeIngredientsTable from "../../components/dashboard/RecipeIngredientsTable";
import BackButton from "../../components/shared/BackButton";
import ContainedActionButton from "../../components/shared/ContainedActionButton";
import Spinner from "../../components/shared/Spinner";
import { useRecipe } from "../../hooks/useRecipe";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function RecipeDetails() {
    const { recipeId } = useParams();
    const { recipe, isLoading: isLoadingRecipe } = useRecipe(Number(recipeId));

    if (isLoadingRecipe) return <Spinner />;
    if (!recipe)
        return (
            <Typography>
                Something went wrong. Cannot get recipe details. Please try
                again later.
            </Typography>
        );

    return (
        <Box sx={{ marginBlock: "2rem" }}>
            <BackButton />

            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                <Grid size={{ sm: 12, md: 6 }} sx={{ width: "100%" }}>
                    <Image src={recipe.image} alt={recipe.title} />
                </Grid>
                <Grid
                    size={{ sm: 12, md: 6 }}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.4rem",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{ fontSize: "1.6rem", fontWeight: 400 }}
                    >
                        {recipe.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "secondary.light",
                            fontSize: "1rem",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 4,
                            overflow: "hidden",
                        }}
                    >
                        {recipe.summary.replace(/<[^>]+>/g, "")}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <RecipeInfo
                            title={`${recipe.readyInMinutes} mins`}
                            icon={<AccessTimeIcon />}
                        />
                        <RecipeInfo
                            title={`${recipe.servings} servings`}
                            icon={<PersonIcon />}
                        />
                        <RecipeInfo
                            title={`${recipe.cuisines
                                .slice(0, 2)
                                .join(" | ")} cuisine`}
                            icon={<LocalDiningIcon />}
                        />
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
                        {recipe.vegetarian && (
                            <RecipeInfoChip label="Vegetarian" />
                        )}
                        {recipe.vegan && <RecipeInfoChip label="Vegan" />}
                        {recipe.glutenFree && (
                            <RecipeInfoChip label="Gluten free" />
                        )}
                        {recipe.dairyFree && (
                            <RecipeInfoChip label="Dairy free" />
                        )}
                    </Stack>

                    <Box>
                        <Typography sx={{ fontWeight: 500 }}>
                            Dish types:
                        </Typography>{" "}
                        {recipe.dishTypes.join(" | ")}
                    </Box>

                    <RecipeIngredientsTable
                        ingredients={recipe.extendedIngredients}
                    />

                    <ContainedActionButton
                        fullWidth
                        component="a"
                        href={recipe.sourceUrl}
                        target="_blank"
                    >
                        View recipe
                    </ContainedActionButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RecipeDetails;
