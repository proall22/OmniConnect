export const toggleDarkMode = () => {
  const root = document.documentElement;

  root.classList.add("theme-transition");

  const isDark = root.classList.contains("dark");
  root.classList.toggle("dark", !isDark);
  localStorage.setItem("theme", !isDark ? "dark" : "light");

  setTimeout(() => {
    root.classList.remove("theme-transition");
  }, 150);
};

export const isDarkMode = () => {
  // SSR check
  if (typeof window === "undefined") return false;

  // Check local storage first, then system preference
  const savedTheme = localStorage.getItem("theme");
  return (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

export const initializeDarkMode = () => {
  const root = document.documentElement;

  root.classList.add("no-transition");

  // Set initial theme
  const shouldBeDark = isDarkMode();
  root.classList.toggle("dark", shouldBeDark);
  localStorage.setItem("theme", shouldBeDark ? "dark" : "light");

  root.offsetHeight;

  root.classList.remove("no-transition");

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      root.classList.toggle("dark", e.matches);
    }
  });
};
