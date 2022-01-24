import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Writing from "../components/Writing"
import ThemeContext from "../components/ThemeContext";


export default function Home({ data }) {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Writing {...data} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export const query = graphql`
      query LastThreePosts {
        allWpPost(sort: {fields: [date], order: DESC }, limit: 3) {
        nodes {
        excerpt
        uri
      date(formatString: "MMMM DD, YYYY")
      title
      excerpt
      id
      categories {
        nodes {
        name
      }
        }
      blogPostReadTime {
        readingTime
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
