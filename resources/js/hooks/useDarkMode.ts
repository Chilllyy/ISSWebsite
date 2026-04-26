import { local } from "@/routes/storage";
import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = typeof localStorage !== "undefined" ? localStorage.getItem('theme') : null;
        return savedTheme ? savedTheme : 'dark';
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