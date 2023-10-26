import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    const html = document.documentElement;
    html.classList.add(currentTheme);
  }, []);
  return { handleChangeTheme, theme };
};

export default useTheme;
