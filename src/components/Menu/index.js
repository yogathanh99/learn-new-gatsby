import React from "react"

import { Link } from "gatsby"

import "./menu.css"

const Menu = ({ title }) => {
  return (
    <header>
      <h3 className="nav-brand">
        <Link to="/">{title}</Link>
      </h3>
      <ul>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Menu
