import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Menu from "../Menu"
import Sidebar from "../Sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          topics: allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            edges {
              node {
                frontmatter {
                  categories
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          <Menu title={data.site.siteMetadata.title} />
          <div className="main">
            <div className="content">{children}</div>
            <div className="sidebar">
              <Sidebar topics={data.topics.edges} />
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Layout
