// Post's List
import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #b7463e;
`

const Wrapper = styled.div`
  background: papayawhip;
`

const ArticleWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  margin: auto;
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
      <div className="top-bg-writing"> </div>
      <ArticleWrapper>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.title

            return (
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
            )
          })}
        </ol>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </ArticleWrapper>
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
      }
    }
  }
`
