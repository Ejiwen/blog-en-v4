// Post's List
import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Post from "../components/Post"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #b7463e;
`

const Wrapper = styled.div`
  background: papayawhip;
`

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Wrapper>
      <Seo title="All posts" />
      <Navbar />
      <div style={{
        background: 'url("../../images/blog-post-header.svg") top center no-repeat',
        backgroundSize: "cover",
        minHeight: "200px"
      }}> </div>

      <div className="writing">
        <div className="writing__header">
          <h3> Blog Posts </h3>
        </div>
        <div className="writing__body">
          {posts.map(post => {
            return (
              <Post key={post.id} {...post} />
            )
          })}
        </div>
        <div className="writing__nav">
          {previousPagePath && (
            <>
              <Link to={previousPagePath}> <FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" /> Previous page </Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}>Next page <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" /> </Link>}
        </div>
      </div>


      <Footer />
    </Wrapper>
  )
}

export default BlogIndex

// Using GraphQl
export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
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
    }
  }
`

/*

<li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div>
                    <h2>
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </div>
                  <section itemProp="description">{parse(post.excerpt)}</section>
                </article>
              </li>

*/