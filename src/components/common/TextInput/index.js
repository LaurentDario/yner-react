'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({
  name,
  label,
  placeholder,
  value,
  error,
  onChange
}) => {
  const wrapperClass = `form-group${error.length > 0 ? ' has-error' : ''}`
  console.log(onChange)
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
        />
        <div className="input">{error}</div>
      </div>
    </div>
  )
}

TextInput.defaultProps = {
  placeholder: '',
  value: '',
  error: ''
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
}

export { TextInput }