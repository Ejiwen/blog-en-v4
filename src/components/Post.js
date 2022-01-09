import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleRight,
  faArrowRight,
  faClock,
  faHourglassStart,
  faLongArrowAltRight,
  faTag,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons"
import parse from "html-react-parser"

const Spaned = styled.span`
  margin: 5px 0;
  padding: 5px;
`

const ReadMore = styled.span`
  display: block;
  text-align: right;
`

const Post = ({
  excerpt,
  uri,
  title,
  featuredImage,
  categories,
  blogPostReadTime,
}) => {
  return (
    <div className="post-content">
      <div className="post-pic">
        {featuredImage && (
          <GatsbyImage
            image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
            alt="post Alt"
            style={{ position: "static" }}
          />
        )}
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#fff"
          ></path>
          <path
            class="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            stroke-width="3"
            fill="transparent"
          ></path>
        </svg>
      </div>

      <div className="post-info">
        <div className="post-info-title">
          <Link to={uri}>{title}</Link>{" "}
        </div>
        <div>
          <p className="post-info-intro">
            {parse(excerpt.substr(0, 160) + "...")}
            <ReadMore>
              <Link to={uri}>
                read more&nbsp;
                <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
              </Link>
            </ReadMore>
          </p>
        </div>

        <div className="post-info-tags">
          <Spaned>{categories.nodes[0].name}</Spaned>
          <Spaned>
            <FontAwesomeIcon icon={faHourglassStart} size="1x" />
            &nbsp;
            {blogPostReadTime.readingTime}
          </Spaned>
        </div>
      </div>
    </div>
  )
}

export default Post
