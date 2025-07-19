import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../lib/appwrite/api";
import { QUERY_KEYS } from "../utils/queryKeys";

export function useGetCurrentUser() {
    const {
        data: currentUser,
        isLoading,
        error,
    } = useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        queryFn: getCurrentUser,
    });

    return { currentUser, isLoading, error };
}
