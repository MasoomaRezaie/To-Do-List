import { Moon, Sun } from 'lucide-react';
import { useDarkmode } from "../context/DarkmodeContext";

function Header() {
    const { isDarkMode, setIsDarkMode } = useDarkmode();

    return (
        <div id="header" className="max-w-full h-25 rounded-3xl p-5 bg-white/40 
        dark:bg-purple-900/10 dark:border dark:border-purple-900/45 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-extrabold font-serif text-indigo-600 dark:text-purple-600">Daily To Do List</h1>
                <p>Stay organized, Achieve your dreams</p>
            </div>
            <button
                type="button"
                className="rounded-full p-2 hover:bg-purple-600/10 dark:hover:bg-purple-500/20"
                onClick={() => setIsDarkMode(current => !current)}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                aria-pressed={isDarkMode}
                title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
                {isDarkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
        </div>
    )
}

export default Header