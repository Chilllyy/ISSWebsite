import useDarkMode from '@/hooks/useDarkMode';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
export default function ThemeSwitcher() {
    const [theme, setTheme] = useDarkMode();
    const className = "h-12 w-12 transition-all duration-300 ease-in-out transform hover:scale-110";
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <MdOutlineLightMode className={className} /> : <MdDarkMode className={className} />}
        </button>
    );
}