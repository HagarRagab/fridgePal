import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unLikeRecipe } from "../lib/appwrite/api";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../utils/queryKeys";
import type { Models } from "appwrite";

export function useUnlikeRecipe() {
    const queryClient = useQueryClient();

    const { mutate: unlikeRecipeMutation, isPending } = useMutation({
        mutationFn: ({ likedRecipeId }: { likedRecipeId: string }) => {
            return unLikeRecipe(likedRecipeId);
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
                (oldData: Models.Document) => ({
                    ...oldData,
                    likes: oldData.likes.filter(
                        (item: Models.Document) =>
                            item.$id !== variables.likedRecipeId
                    ),
                })
            );

            return { prevUserData };
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });

            toast("Unlike recipe successfully.");
        },

        onError: () =>
            toast(
                "Something went wrong. Cannot unlike recipe. Please try again later."
            ),
    });

    return { unlikeRecipeMutation, isPending };
}
