'use strict'

import React from 'react'
import { Link } from 'react-router-dom'

export const pageNotFound = () => {
  return(
    <React.Fragment>
      <h1>Page not found!</h1>
      <p>Whoops! Sorry, there is nothing to see here</p>
      <Link to="/">Back to Home</Link>
    </React.Fragment>
  )
}