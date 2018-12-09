'use strict'

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const checkActive = (match, location) => {
      //some additional logic to verify you are in the home URI
      if(!location) return false;
      const {pathname} = location;
      return pathname === "/";
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <NavLink to="app" className="navbar-brand">Yner</NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink isActive={checkActive} className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink isActive={checkActive} className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink isActive={checkActive} className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }