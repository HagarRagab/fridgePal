import type { Models } from "appwrite";
import { Link } from "react-router";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Checkbox, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

import ContainedActionButton from "../shared/ContainedActionButton";
import CardContainer from "./CardContainer";
import CardContentHeading from "./CardContentHeading";
import { useUnlikeRecipe } from "../../hooks/useUnlikeRecipe";

type RecipeCardProps = {
    recipe: Models.Document;
    selectedRecipes: string[];
    onSelectRecipe: (recipeId: string) => void;
    isSelecting: boolean;
};

function LikedRecipeCard({
    recipe,
    selectedRecipes,
    onSelectRecipe,
    isSelecting,
}: RecipeCardProps) {
    const { unlikeRecipeMutation } = useUnlikeRecipe();

    function handleUnLikeRecipe() {
        unlikeRecipeMutation({ likedRecipeId: recipe.$id });
    }

    return (
        <CardContainer imgSrc={recipe.imageSrc} alt={recipe.title}>
            {isSelecting && (
                <Checkbox
                    sx={{
                        position: "absolute",
                        "& .dsxfUI": {
                            fill: "#fff",
                        },
                    }}
                    checked={selectedRecipes.includes(recipe.$id)}
                    onChange={() => onSelectRecipe(recipe.$id)}
                />
            )}
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
                    <IconButton aria-label="like" onClick={handleUnLikeRecipe}>
                        <FavoriteIcon sx={{ fill: red[500] }} />
                    </IconButton>
                </CardContentHeading>

                <ContainedActionButton fullWidth>
                    <Link to={`/recipe/${recipe.id}`}>see details</Link>
                </ContainedActionButton>
            </CardContent>
        </CardContainer>
    );
}

export default LikedRecipeCard;
