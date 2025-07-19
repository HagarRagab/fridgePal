import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createInventoryItem, updateInventoryItem } from "../lib/appwrite/api";
import type { TInventoryItem } from "../types";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useInventoryItem(type: "create" | "update") {
    // Get QueryClient from the context
    const queryClient = useQueryClient();

    const { mutate: inventoryMutation, isPending } = useMutation({
        mutationFn: (inventoryItem: TInventoryItem) => {
            return type === "create"
                ? createInventoryItem(inventoryItem)
                : updateInventoryItem(inventoryItem);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    QUERY_KEYS.GET_INVENTORY_ITEMS,
                    QUERY_KEYS.GET_CURRENT_USER,
                ],
            });
            toast(
                `Inventory item was ${
                    type === "create" ? "created" : "updated"
                } successfully`
            );
        },
        onError: () =>
            toast(`Failed to ${type} inventory item. Please try again later.`),
    });

    return { inventoryMutation, isPending };
}
