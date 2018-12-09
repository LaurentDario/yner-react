'use strict'

import React from 'react'
import { Header } from './common/Header'
import { Footer } from './common/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './route'

export const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <AppRouter />
        <Footer />
      </React.Fragment>
    </Router>
  )
}