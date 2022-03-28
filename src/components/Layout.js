import React, { useContext, useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import ThemeContext from "./context";


const Layout = ({ isBlogPage, children }) => {
  let [theme, setTheme] = useContext(ThemeContext);

  // useEffect(() => {
  //   setTheme(localStorage.getItem('theme'));
  // }, [])

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
