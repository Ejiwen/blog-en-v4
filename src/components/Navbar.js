import { Link } from "gatsby"
import React, { useEffect } from "react"

const Navbar = () => {
  useEffect(() => {
    const checky = document.querySelector("#checkLabel")
    checky.checked = true
  })
  return (
    <nav className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="checkLabel" />
      <label className="navigation__label" for="checkLabel">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      {/* <Link to="/">
        <img className="blogLogo" src={logo} />
      </Link> */}

      <div className="navigation__menu">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="navigation__item">
            <Link className="navigation__link" to="/">
              About
            </Link>
          </li> */}
          <li className="navigation__item">
            <Link className="navigation__link" to="/blog">
              Blog
            </Link>
          </li>
          {/* <li className="navigation__item">
            <Link className="navigation__link" to="#Experiencesy">
              Experience
            </Link>{" "}
          </li> */}
          <li className="navigation__item">
            <Link className="navigation__link" to="https://www.cheikhanyejiwen.com/#projects">
              Projects
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="https://www.cheikhanyejiwen.com/#contacts">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
