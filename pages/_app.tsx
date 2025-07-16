import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import React, { createContext, useEffect, useState } from "react";

type ThemeContextType = { theme: "light" | "dark"; setTheme: (v: "light" | "dark") => void };
export const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => {} });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Only run on client
        const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
        if (stored === "dark" || stored === "light") {
            setTheme(stored);
        } else if (typeof window !== 'undefined') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? "dark" : "light");
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme", theme);
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [theme, mounted]);

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, setTheme: (v) => setTheme(v) }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    );
}
