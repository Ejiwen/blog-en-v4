import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ isHomePage, children }) => {
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
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header title={parse(title)} description={parse(description)} />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
