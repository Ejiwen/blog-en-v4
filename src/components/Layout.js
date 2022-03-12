import React, { useContext, useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import ThemeContext from "./context";


const Layout = ({ isBlogPage, children }) => {
  //let [theme] = useContext(ThemeContext);
  //let theme = localStorage.getItem("theme");
  // let theme = localStorage.getItem('theme') || 'light-theme';
  // localStorage.setItem("theme", useContext(ThemeContext));

  const [theme, setTheme] = useContext(ThemeContext);
  let themy = localStorage.getItem('theme') || theme;
  function toggleTheme() {
    setTheme(prevTheme => (prevTheme == "dark-theme" ? "light-theme" : "dark-theme"));
    localStorage.setItem("theme", theme);
  }


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
    <div className={themy} data-is-root-path={isBlogPage}>
      <h1 onClick={toggleTheme}>HERE !!!!!!!</h1>
      <Header title={parse(title)} description={parse(description)} />

      <main>{children}</main>

      <Projects />

      <Footer />
    </div>
  )
}

export default Layout
