'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ users }) => {
  const createUserRow = (user) => {
    return (
      <tr key={user.id}>
        <td>
          <a href={`/#users/${user.id}`}>
            {user.id}
          </a>
        </td>
        <td>
          {user.firstname} {user.lastname}
        </td>
      </tr>
    )
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(createUserRow, this)}
        </tbody>
      </table>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export { UserList }