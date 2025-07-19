import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeRecipe, unLikeRecipe } from "../lib/appwrite/api";
import type { TLikedRecipe } from "../types";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../utils/queryKeys";
import type { Models } from "appwrite";

export function useToggleLikeRecipe() {
    const queryClient = useQueryClient();

    const { mutate: toggleLikeRecipe, isPending } = useMutation({
        mutationFn: ({
            userId,
            likedRecipe,
            likedRecipeId,
        }: {
            userId: string;
            likedRecipe: TLikedRecipe;
            likedRecipeId: string | undefined;
        }) => {
            return !likedRecipeId
                ? likeRecipe(likedRecipe, userId)
                : unLikeRecipe(likedRecipeId);
        },
        onMutate: async (variables) => {
            await queryClient.cancelQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });

            const prevUserData = queryClient.getQueryData([
                QUERY_KEYS.GET_CURRENT_USER,
            ]);

            queryClient.setQueryData(
                [QUERY_KEYS.GET_CURRENT_USER],
                (oldData: Models.Document) => {
                    if (!variables.likedRecipeId)
                        return {
                            ...oldData,
                            likes: [...oldData.likes, variables.likedRecipe],
                        };
                    else
                        return {
                            ...oldData,
                            likes: oldData.likes.filter(
                                (item: Models.Document) =>
                                    item.$id !== variables.likedRecipeId
                            ),
                        };
                }
            );

            return { prevUserData };
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });

            toast(
                `${
                    !variables.likedRecipeId ? "Like" : "Unlike"
                } recipe successfully.`
            );
        },

        onError: (_, variables) =>
            toast(
                `Something went wrong. Cannot ${
                    !variables.likedRecipeId ? "like" : "unlike"
                } recipe. Please try again later.`
            ),
    });

    return { toggleLikeRecipe, isPending };
}
