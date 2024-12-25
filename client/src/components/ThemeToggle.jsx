import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log("theme toggle");
    setDarkTheme(!darkTheme);
  };

  const setTheme = () => {
    if (darkTheme) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").removeAttribute("data-theme", "dark");
    }
  };

  useEffect(() => {
    setTheme();
  }, [darkTheme]);

  return (
    <button className="mode-btn" id="theme" onClick={toggleTheme}>
      mode
    </button>
  );
};
export default ThemeToggle;
