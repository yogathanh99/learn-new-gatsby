import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <h1>New topics</h1>
    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <div key={i}>
        <h3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <span style={{ color: `#BBB` }}> — {node.frontmatter.date}</span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
