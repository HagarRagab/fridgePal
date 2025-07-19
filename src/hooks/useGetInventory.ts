import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../utils/queryKeys";
import { getInventoryItems } from "../lib/appwrite/api";
import type { inventoryItemsConditions } from "../types";

export function useGetInventory({
    userId,
    page,
    from,
    categoryId,
    condition,
}: {
    userId: string;
    page?: number;
    from?: number;
    categoryId?: string;
    condition?: inventoryItemsConditions;
}) {
    const queryKey: (string | number)[] = [QUERY_KEYS.GET_INVENTORY_ITEMS];

    if (page) queryKey.push(page);
    if (categoryId) queryKey.push(categoryId);
    if (condition) queryKey.push(condition);

    const {
        data: inventory,
        isLoading,
        error,
    } = useQuery({
        queryKey,
        queryFn: () =>
            getInventoryItems({ userId, from, categoryId, condition }),
        enabled: !!userId,
    });

    return { inventory, isLoading, error };
}
