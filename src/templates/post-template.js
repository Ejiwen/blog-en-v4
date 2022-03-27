// Single Post
import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import styled from "@emotion/styled"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Disqus } from 'gatsby-plugin-disqus';

import highlightCode from '../utils/highlightCode'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #b7463e;
`

const ArticleWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  margin: auto;
`

const PostTemplate = ({ data: { previous, next, post } }) => {
  useEffect(() => {
    highlightCode()
  })

  let disqusConfig = {
    url: post.uri,
    identifier: post.id,
    title: post.title,
  }

  return (
    <div className={localStorage.getItem('theme')} >
      <Navbar />
      <div style={{
        background: 'url("../../images/blog-post-header.svg") top center no-repeat',
        backgroundSize: "cover",
        minHeight: "200px"
      }}> </div>
      <ArticleWrapper>
        <Title> {parse(post.title)} </Title>
        <div> </div>
        {!!post.content && <div>{parse(post.content)}</div>}

        <div>
          <Disqus config={disqusConfig} />
        </div>
      </ArticleWrapper>



      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-around`,
            listStyle: `none`,
            padding: 0,
            color: `#be5a19`,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
