import "./DarkModeToggle.css";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMode = () => {
    const newIsDark = document.documentElement.classList.toggle('dark');
    setIsDark(newIsDark);
    localStorage.setItem('darkMode', newIsDark.toString());
  }

  return (
    <input 
      id="toggle" 
      className="toggle" 
      type="checkbox" 
      onChange={toggleMode}
      checked={isDark}
    />
  )
}