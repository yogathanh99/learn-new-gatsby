import React from "react"

import "./menu.css"

const Menu = ({ title }) => {
  return (
    <header>
      <h3 className="nav-brand">
        <a href={`/`}>{title}</a>
      </h3>
      <ul>
        <li className="nav-item">
          <a href={`/about`}>About</a>
        </li>
        <li className="nav-item">
          <a href={`/contact`}>Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Menu
