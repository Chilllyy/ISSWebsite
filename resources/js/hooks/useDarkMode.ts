import { local } from "@/routes/storage";
import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
    });
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [theme, setTheme];
}