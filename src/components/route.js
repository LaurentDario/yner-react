'use strict'

import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Users } from './Users'
import { ManageUser } from './Users/manageUser'
import { pageNotFound } from './404'
import { Route, Switch } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users} />
        <Route path="/user" component={ManageUser} />
        <Route path="/about" component={About} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  )
}