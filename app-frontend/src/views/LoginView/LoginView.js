import React, { useState } from 'react'
import BlankLayout from '../../layouts/BlankLayout/BlankLayout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginRequest } from '../../store/actions/actions'

import './LoginView.scss'

const LoginView = () => {
  const dispatch = useDispatch()

  const isDev = process.env.NODE_ENV === 'development'

  const prefillEmail = isDev ? 'test@test.com' : ''
  const prefillPassword = isDev ? 'pass' : ''

  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState(prefillPassword)

  const loginHandler = async () => {
    dispatch(loginRequest({ email, password }))
  }

  return (
    <BlankLayout>
      <div id="login-view">
        <form onSubmit={e => e.preventDefault()}>
          <h3>Login</h3>

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
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={loginHandler}>Sign In</button>

          <p className="forgot-password text-right">
            Not registered <Link to="/registration">Sign Up?</Link>
          </p>
        </form>
      </div>
    </BlankLayout>
  )
}

export default LoginView
