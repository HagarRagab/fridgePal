import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeRecipe } from "../lib/appwrite/api";
import type { TLikedRecipe } from "../types";
import toast from "react-hot-toast";
import { QUERY_KEYS } from "../utils/queryKeys";
import type { Models } from "appwrite";

export function useLikeRecipe() {
    const queryClient = useQueryClient();

    const { mutate: likeRecipeMutation, isPending } = useMutation({
        mutationFn: ({
            likedRecipe,
            userId,
        }: {
            likedRecipe: TLikedRecipe;
            userId: string;
        }) => {
            return likeRecipe(likedRecipe, userId);
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
                    return {
                        ...oldData,
                        likes: [...oldData.likes, variables.likedRecipe],
                    };
                }
            );

            return { prevUserData };
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            });
            toast("Like recipe successfully.");
        },

        onError: () =>
            toast(
                "Something went wrong. Cannot like recipe. Please try again later."
            ),
    });

    return { likeRecipeMutation, isPending };
}
