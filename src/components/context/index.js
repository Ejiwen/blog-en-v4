import { createContext } from "react";

// localStorage.setItem("theme", "light-theme");

// const ThemeContext = createContext(["light-theme", () => { }]);
// localStorage.getItem('theme') || 'light-theme';
// if (!localStorage.getItem('theme')) {
//     localStorage.setItem("theme", 'light-theme');
// }

if (typeof window !== 'undefined') {
    localStorage.setItem("theme", 'light-theme');
}

const ThemeContext = createContext(localStorage.getItem('theme') || 'light-theme');

export default ThemeContext;