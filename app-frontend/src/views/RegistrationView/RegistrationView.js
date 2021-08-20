import React, { useState } from 'react'
import BlankLayout from '../../layouts/BlankLayout/BlankLayout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registrationRequest } from '../../store/actions/actions'

import './RegistrationView.scss'

const RegistrationView = () => {
  const dispatch = useDispatch()

  const isDev = process.env.NODE_ENV === 'development'

  const refillName = isDev ? 'Danis K' : ''
  const prefillEmail = isDev ? `test_${Math.round(Math.random() * 1000)}@gmail.com` : ''
  const prefillPass = isDev ? 'password' : ''

  const [name, setName] = useState(refillName)
  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState(prefillPass)
  const [confirm, setConfirm] = useState(prefillPass)

  const passwordsMatch = password === confirm

  const registrationHandler = async () => {
    dispatch(registrationRequest({ name, email, password, confirm }))
  }

  return (
    <BlankLayout>
      <div id="login-view">
        <form onSubmit={e => e.preventDefault()}>
          <h3>Register</h3>

          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full Name"
              autoFocus
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={registrationHandler}>Sign In</button>

          <p className="forgot-password text-right">
            Already registered <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </BlankLayout>
  )
}

export default RegistrationView
