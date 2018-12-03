'use strict'

import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <a href="/" className="navbar-brand">
            Yner
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }