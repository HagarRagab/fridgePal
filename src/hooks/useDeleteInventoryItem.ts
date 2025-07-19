import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteInventoryItem } from "../lib/appwrite/api";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useDeleteInventoryItem() {
    const queryClient = useQueryClient();

    const { mutate: deleteInventory, isPending } = useMutation({
        mutationFn: (inventoryItemId: string) =>
            deleteInventoryItem(inventoryItemId),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_INVENTORY_ITEMS],
            });
            toast("Inventory item was deleted successfully.");
        },
        onError: () =>
            toast("Cannot delete inventory item. Please try again later."),
    });

    return { deleteInventory, isPending };
}
