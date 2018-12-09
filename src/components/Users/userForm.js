'use strict'

import React from 'react'
import { TextInput } from '../common/TextInput'

export const UserForm = ({ user, onChange }) => {
  return (
    <form id="userForm">
      <h1>Manage User</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={user.firstName}
        onChange={(event) => {onChange(event)}}
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={user.lastName}
        onChange={(event) => {onChange(event)}}
      />

        <input type="submit"
          value="Save"
          className="btn btn-dark mt-3"
        />
    </form>
  )
}