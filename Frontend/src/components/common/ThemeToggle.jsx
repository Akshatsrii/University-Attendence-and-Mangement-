import { useEffect, useState } from "react";



const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <button
      className="theme-icon-btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle Theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
