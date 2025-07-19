import { createContext, useContext, type ReactNode } from "react";

import type { TNotificationContext } from "../types";
import { useGetInventory } from "../hooks/useGetInventory";
import { useAuthContext } from "./AuthContext";

const INIT_STATE: TNotificationContext = {
    isLoadingUser: false,
    expireSoonInventory: undefined,
    isLoadingExpireSoonInventory: false,
    expiredInventory: undefined,
    isLoadingExpiredInventory: false,
};

const NotificationContext = createContext(INIT_STATE);

function NotificationProvider({ children }: { children: ReactNode }) {
    const { user, isLoading: isLoadingUser } = useAuthContext();

    const {
        inventory: expireSoonInventory,
        isLoading: isLoadingExpireSoonInventory,
    } = useGetInventory({
        userId: user.account_id,
        condition: "expireSoon",
    });

    const {
        inventory: expiredInventory,
        isLoading: isLoadingExpiredInventory,
    } = useGetInventory({
        userId: user.account_id,
        condition: "expired",
    });

    return (
        <NotificationContext.Provider
            value={{
                isLoadingUser,
                expireSoonInventory,
                isLoadingExpireSoonInventory,
                expiredInventory,
                isLoadingExpiredInventory,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotificationContext() {
    const context = useContext(NotificationContext);
    if (!context)
        throw new Error(
            "NotificationContext was used outside NotificationProvider"
        );
    return context;
}

export default NotificationProvider;
