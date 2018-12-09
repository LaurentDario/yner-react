'use strict'

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="jumbotron">
      <h1>Yner</h1>
      <p>Let it out! Feel better.</p>
      <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
  )
}

export { Home }