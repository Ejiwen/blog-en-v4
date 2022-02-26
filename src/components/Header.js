import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./Navbar"
import SvgHeaderBg from "./SvgHeaderBg"
import logo from "../../static/images/logoV2-top.svg"

const Header = ({ title, description }) => {
  return (
    <header style={{ position: "relative" }}>

      <Link to="/">
        <img className="blogLogo" src={logo} />
      </Link>

      <SvgHeaderBg />
      <div className="btm-header">
        <svg height="70" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1633 70H.115C172.533 27.895 473.772 0 816.557 0 1159.34 0 1460.58 27.895 1633 70Z" fill="#fff" />
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
