import { createContext } from "react";

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

const ThemeContext = createContext('');

export default ThemeContext;