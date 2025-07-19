import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { lightGreen, red } from "@mui/material/colors";
import { Link } from "react-router";
import type { Models } from "appwrite";
import { useState } from "react";

import type { TRecipe } from "../../types";
import ContainedActionButton from "../shared/ContainedActionButton";
import CardContainer from "./CardContainer";
import CardContentHeading from "./CardContentHeading";
import IngredientsList from "./ingredientsList";
import { useAuthContext } from "../../context/AuthContext";
import { useLikeRecipe } from "../../hooks/useLikeRecipe";
import { useUnlikeRecipe } from "../../hooks/useUnlikeRecipe";

type RecipeCardProps = {
    recipe: TRecipe;
    likedRecipes: Models.Document[] | undefined;
};

function RecipeCard({ recipe, likedRecipes }: RecipeCardProps) {
    const { user } = useAuthContext();
    const { likeRecipeMutation } = useLikeRecipe();
    const { unlikeRecipeMutation } = useUnlikeRecipe();

    const likedRecipe = likedRecipes?.find(
        (likedRecipe: Models.Document) => likedRecipe.recipe_id === recipe.id
    );

    const [isLiked, setIsLiked] = useState(likedRecipe !== undefined);

    function toggleLike() {
        if (isLiked && likedRecipe)
            unlikeRecipeMutation({ likedRecipeId: likedRecipe.$id });
        else
            likeRecipeMutation({
                likedRecipe: {
                    recipe_id: recipe.id,
                    title: recipe.title,
                    imageSrc: new URL(recipe.image),
                },
                userId: user.account_id,
            });

        setIsLiked((isLiked) => !isLiked);
    }

    return (
        <CardContainer imgSrc={recipe.image} alt={recipe.title}>
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: ".5rem",
                }}
            >
                <CardContentHeading title={recipe.title}>
                    <IconButton aria-label="like" onClick={toggleLike}>
                        {isLiked ? (
                            <FavoriteIcon sx={{ fill: red[500] }} />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>
                </CardContentHeading>

                <IngredientsList
                    icon={<CheckIcon />}
                    title={`You Have (${recipe.usedIngredientCount})`}
                    list={recipe.usedIngredients}
                    color={lightGreen[800]}
                    bgColor={lightGreen[100]}
                    borderColor={lightGreen[200]}
                />

                <IngredientsList
                    icon={<AddIcon />}
                    title={`You Need (${recipe.missedIngredientCount})`}
                    list={recipe.missedIngredients}
                    color={red[400]}
                    bgColor={red[100]}
                    borderColor={red[200]}
                />

                <ContainedActionButton fullWidth>
                    <Link to={`/recipe/${recipe.id}`}>see details</Link>
                </ContainedActionButton>
            </CardContent>
        </CardContainer>
    );
}

export default RecipeCard;
