import { createContext, useContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext(null);

export function DarkmodeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("todo-theme");
        return savedTheme
            ? savedTheme === "dark"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        localStorage.setItem("todo-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <DarkmodeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkmodeContext.Provider>
    );
}

export function useDarkmode() {
    const context = useContext(DarkmodeContext);
    if (!context) {
        throw new Error("useDarkmode must be used within a DarkmodeProvider");
    }
    return context;
}