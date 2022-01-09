import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDev,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons"
import logo from "../../static/images/logoV2-top.svg"

const Footer = () => {
  useEffect(() => {}, [])
  return (
    <footer>
      <div className="footer-right-div">
        <div className="logo-footer">
          <img src={logo} />
        </div>
        <div className="follow-me">
          <a href="https://www.linkedin.com/in/ejiwen/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/Ejiwen" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </a>
          <a href="https://dev.to/ejiwen" target="_blank">
            <FontAwesomeIcon icon={faDev} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFu08838dtH-xdNMZHmAY4w"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
          </a>
        </div>
      </div>

      <div className="contact-me">
        <form
          className="contact-form"
          action=""
          method="post"
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h3>Quick Contact</h3>

          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              name="name"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              name="email"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              name="message"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </footer>
  )
}

export default Footer
