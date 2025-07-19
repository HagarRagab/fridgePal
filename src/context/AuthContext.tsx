import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { getCurrentUser } from "../lib/appwrite/api";
import type { TAuthContext, TUserDocument } from "../types";

const INIT_USER: TUserDocument = {
    account_id: "",
    email: "",
    name: "",
    username: "",
};

const INIT_STATE: TAuthContext = {
    user: INIT_USER,
    setUser: () => {},
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    isLoading: false,
    setIsLoading: () => {},
    checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext(INIT_STATE);

function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(INIT_USER);
    const [isLoading, setIsLoading] = useState(false);

    async function checkAuthUser() {
        try {
            setIsLoading(true);
            const currentUser = await getCurrentUser();

            if (!currentUser) {
                setIsAuthenticated(false);
                return false;
            } else {
                setIsAuthenticated(true);
                setUser({
                    account_id: currentUser.$id,
                    name: currentUser.name,
                    email: currentUser.email,
                    username: currentUser.username,
                });
                return true;
            }
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        checkAuthUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAuthenticated,
                setIsAuthenticated,
                isLoading,
                setIsLoading,
                checkAuthUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext was used outside AuthProvider");
    return context;
}

export default AuthProvider;
