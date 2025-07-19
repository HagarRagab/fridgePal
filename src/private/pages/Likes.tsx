import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";

import type { Models } from "appwrite";
import AlertDialog from "../../components/dashboard/AlertDialog";
import CardsGroup from "../../components/dashboard/CardsGroup";
import LikedRecipeCard from "../../components/dashboard/LikedRecipeCard";
import PageContainer from "../../components/dashboard/PageContainer";
import PageTitle from "../../components/dashboard/PageTitle";
import BackButton from "../../components/shared/BackButton";
import NoResult from "../../components/shared/NoResult";
import Spinner from "../../components/shared/Spinner";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useUnlikeRecipe } from "../../hooks/useUnlikeRecipe";

function Likes() {
    const { currentUser, isLoading: isLoadingUser } = useGetCurrentUser();
    const { unlikeRecipeMutation } = useUnlikeRecipe();

    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    if (isLoadingUser) return <Spinner />;
    const likes = currentUser?.likes;

    function handleSelectRecipe(recipeId: string) {
        const isSelected = selectedRecipes.includes(recipeId);
        if (!isSelected)
            setSelectedRecipes((prevSelectedRecipes) => [
                ...prevSelectedRecipes,
                recipeId,
            ]);
        else
            setSelectedRecipes((prevSelectedRecipes) =>
                prevSelectedRecipes.filter((id: string) => id !== recipeId)
            );
    }

    function handleSubmitAction() {
        setIsDeleting(true);
        Promise.all(
            selectedRecipes.map((recipeId) =>
                unlikeRecipeMutation({ likedRecipeId: recipeId })
            )
        );
        setIsDeleting(false);
        setOpenDeleteAlert(false);
        setIsSelecting(false);
    }

    return (
        <PageContainer>
            <BackButton />
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <PageTitle
                    title="Liked recipes"
                    subTitle="Browse and see details of your liked recipes"
                />
                <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    {isSelecting && selectedRecipes.length > 0 && (
                        <AlertDialog
                            open={openDeleteAlert}
                            onCloseDialog={() => setOpenDeleteAlert(false)}
                            onSubmitAction={handleSubmitAction}
                            isDeleting={isDeleting}
                        >
                            <Button
                                aria-label="delete item"
                                onClick={() => setOpenDeleteAlert(true)}
                            >
                                Delete
                            </Button>
                        </AlertDialog>
                    )}

                    <Button
                        variant="contained"
                        sx={{ paddingBlock: "10px" }}
                        onClick={() =>
                            setIsSelecting((currentState) => !currentState)
                        }
                    >
                        {isSelecting ? "Cancel" : "Select"}
                    </Button>
                </Box>
            </Box>
            <CardsGroup>
                {!likes || likes?.length === 0 ? (
                    <NoResult
                        title="No liked recipes"
                        subTitle="Start adding some recipes to your likes list."
                    />
                ) : (
                    likes?.map((recipe: Models.Document) => (
                        <Grid key={recipe.$id}>
                            <LikedRecipeCard
                                recipe={recipe}
                                selectedRecipes={selectedRecipes}
                                onSelectRecipe={handleSelectRecipe}
                                isSelecting={isSelecting}
                            />
                        </Grid>
                    ))
                )}
            </CardsGroup>
        </PageContainer>
    );
}

export default Likes;
