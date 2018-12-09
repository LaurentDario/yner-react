'use strict'

import React from 'react'
import { Link } from 'react-router-dom'
import { UserApi } from '../../api/userApi'
import { UserList } from './userList'

class Users extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: UserApi.getAllUsers()
    })
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <Link to="/user" className="btn btn-light">Add User</Link>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export { Users }