import React from "react";

// localStorage.setItem("theme", "light-theme");

// const ThemeContext = createContext(["light-theme", () => { }]);
// localStorage.getItem('theme') || 'light-theme';
// if (!localStorage.getItem('theme')) {
//     localStorage.setItem("theme", 'light-theme');
// }

// const windowGlobal = typeof window !== 'undefined' && window

// if (!windowGlobal.localStorage.getItem('theme')) {
//     windowGlobal.localStorage.setItem("theme", 'light-theme');
// }
const storedTheme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme');

// if (!storedTheme) {
//     window.localStorage.setItem('theme', "light-theme");
// }
console.log("----------->" + storedTheme)
//const ThemeContext = createContext(storedTheme || "light-theme");
const ThemeContext = React.createContext(storedTheme || "light-theme");

export default ThemeContext;