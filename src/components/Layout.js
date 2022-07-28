import React, { useContext } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import ThemeContext from "./context/index.js";


const Layout = ({ isBlogPage, children }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const storedTheme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme');
  setTheme(storedTheme);

  console.log("FROM LAYOUT COMPONENT ==> " + theme)
  // let [theme, setTheme] = useContext(storedTheme || ThemeContext);

  // useEffect(() => {
  //   const storedTheme =
  //     typeof window !== 'undefined' && window.localStorage.getItem('theme');
  //   if (typeof window !== 'undefined') {
  //     window.localStorage.setItem('theme', storedTheme || "light-theme");
  //   }
  // }, [theme]);

  // useEffect(() => {
  //   window.localStorage.setItem('theme', theme);
  // }, [theme]);

  const {
    wp: {
      generalSettings: { title, description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)


  return (
    <div className={theme} data-is-root-path={isBlogPage}>
      <Header title={parse(title)} description={parse(description)} />

      <main>{children}</main>

      <Projects />

      <Footer />
    </div>
  )
}

export default Layout
