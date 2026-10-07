"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(true)
    const [mounted, setMounted] = useState(false)

    function toggleTheme() {
        setIsDark((prev) => !prev)
    }

    // Read saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("isDark")

        if (savedTheme !== null) {
            setIsDark(savedTheme === "true")
        }

        setMounted(true)
    }, [])

    // Apply theme + save theme
    useEffect(() => {
        if (!mounted) return

        localStorage.setItem("isDark", isDark)

        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark, mounted])

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}