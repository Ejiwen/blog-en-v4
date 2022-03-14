import React, { useState, useEffect, useRef, useContext } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./Navbar"
import SvgHeaderBg from "./SvgHeaderBg"
import logo from "../../static/images/logoV2-top.svg"
import ThemeContext from "./context";

const Header = ({ title, description }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  function toggleTheme() {
    setTheme(prevTheme => (prevTheme == "dark-theme" ? "light-theme" : "dark-theme"));
    localStorage.setItem("theme", theme);
  }

  // useEffect(() => {
  //   console.log('hi');
  //   // localStorage.setItem("theme", theme);
  //   // setTheme(localStorage.getItem("theme"))
  //   if (!localStorage.getItem('theme')) {
  //     localStorage.setItem("theme", theme);
  //   }
  // }, [theme])


  return (
    <header style={{ position: "relative" }}>

      <Link to="/">
        <img className="blogLogo" src={logo} />
        <h3 onClick={toggleTheme}>Theme Switcher</h3>
      </Link>

      <SvgHeaderBg />
      <div className="btm-header">
        <svg className="svg-seperator" height="70" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M1633 70H.115C172.533 27.895 473.772 0 816.557 0 1159.34 0 1460.58 27.895 1633 70Z" />
        </svg>
      </div>

      <Navbar style={{ position: "absolute" }} />

      <div className="my-bio-container">
        <div className="my-bio">
          <div>
            <p> Hi, My name is </p>
            <h3 className="ml2">{title}</h3>

            <p className="my-bio--begin"></p>
            <p className="my-bio--role">{description}</p>
            <p className="my-bio--fin"></p>
          </div>
        </div>
      </div>

      {/* <StaticImage
        src="../../static/images/header-mr-sf.svg"
        style={{ visibility: "hidden", height: "600px" }}
        alt="Image retro"
      /> */}

      {/* <HeaderBttomBg className="btm-header"></HeaderBttomBg> */}
    </header>
  )
}

export default Header
