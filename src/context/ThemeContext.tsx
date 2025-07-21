import {
    createContext,
    useContext,
    useEffect,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

const INIT_STATE: {
    mode: "light" | "dark";
    setMode: Dispatch<SetStateAction<"light" | "dark">>;
} = {
    mode: "light",
    setMode: () => {},
};

const ModeContext = createContext(INIT_STATE);

function ModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
        else return "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModeContext() {
    const context = useContext(ModeContext);
    if (!context) throw new Error("ModeContext was used outside ModeProvider");
    return context;
}

export default ModeProvider;
