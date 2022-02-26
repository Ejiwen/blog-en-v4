import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./Navbar"
import SvgHeaderBg from "./SvgHeaderBg"

const HeaderBttomBg = styled.div`
  background: url("sectionmask3.svg") no-repeat;
  background-size: cover;
  height: 72px;
`

const Header = ({ title, description }) => {
  return (
    <header style={{ position: "relative" }}>

      <SvgHeaderBg />

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
      <StaticImage
        src="../../static/images/header-mr-sf.svg"
        style={{ visibility: "hidden", height: "600px" }}
        alt="Image retro"
      />
      <HeaderBttomBg className="btm-header"></HeaderBttomBg>
    </header>
  )
}

export default Header
