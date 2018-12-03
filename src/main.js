'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'

const App = ({route}) => {
  let Child

  switch(route) {
    case 'about': Child = About; break;
    default: Child = Home;
  }

  return (
    <React.Fragment>
      <Header />
      <Child />
      <Footer />
    </React.Fragment>
  )
}

function render() {
  const route = window.location.hash.substr(1)
  ReactDOM.render(<App route={route} />, document.getElementById('app'))
}

window.addEventListener('hashchange', render)
render()
