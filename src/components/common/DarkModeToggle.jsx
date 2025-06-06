import { useTheme } from "../../contexts/ThemeContext";

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const handleThemeChange = () => {
    // Remove transitions before theme change
    document.documentElement.classList.add("no-transitions");

    setIsDark(!isDark);

    // Re-enable transitions after a small delay
    setTimeout(() => {
      document.documentElement.classList.remove("no-transitions");
    }, 100);
  };

  useEffect(() => {
    if (isDark) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, [isDark]);
  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <svg
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
