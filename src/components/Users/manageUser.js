'use strict'

import React from 'react'
import { UserForm } from './userForm'

class ManageUser extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: {
        id: null,
        firstName: '',
        lastName: ''
      }
    }

    this.setUserSate = this.setUserSate.bind(this);
  }

  setUserSate(event) {
    const field = event.target.name
    const value = event.target.value
    this.state.user[field] = value
    return this.setState({user: this.state.user})
  }

  render() {
    return (
      <React.Fragment>
        <UserForm
          user={this.state.user}
          onChange={this.setUserSate}
        />
        <h1>{this.state.user.firstName}</h1>
      </React.Fragment>
    )
  }
}

export { ManageUser}