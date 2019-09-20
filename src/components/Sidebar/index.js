import React from "react"
import { Link } from "gatsby"
import slug from "slug"

import "./sidebar.css"

const Sidebar = ({ topics }) => {
  let tags = []
  let categories = []

  topics.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.frontmatter.tags]))
    categories = Array.from(
      new Set([...categories, ...node.frontmatter.categories])
    )
  })

  return (
    <aside>
      <div>
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <p key={index}>
            <Link to={`/category/${slug(category).toLowerCase()}/`}>
              {category}
            </Link>
          </p>
        ))}
      </div>

      <div>
        <h3>Tags</h3>
        {tags.map((tag, index) => (
          <span key={index}>
            <Link to={`/tag/${slug(tag).toLowerCase()}/`}>{tag}</Link>{" "}
          </span>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
