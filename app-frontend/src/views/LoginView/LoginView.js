import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { NotificationManager } from 'react-notifications'
import BlankLayout from '../../layouts/BlankLayout/BlankLayout'
import { loginRequest } from '../../store/actions/actions'
import { isDev } from '../../config/app-config'

import './LoginView.scss'

const LoginView = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('notifications')
    if (isDev) {
      NotificationManager.info(['test@test.com - regular user\n', 'admin@test.com - admin user\n', 'password - "Password"'], 'ONLY DEV NOTE:', 8000)
    }
  }, [])

  const prefillEmail = isDev ? 'test@test.com' : ''
  const prefillPassword = isDev ? 'Password' : ''

  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState(prefillPassword)

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(loginRequest({ email, password }))
  }

  return (
    <BlankLayout>
      <div id="login-view">
        <form onSubmit={loginHandler}>
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

          <button type="submit" className="btn btn-primary btn-block">Sign In</button>

          <p className="forgot-password text-right">
            Not registered <Link to="/registration">Sign Up?</Link>
          </p>
        </form>
      </div>
    </BlankLayout>
  )
}

export default LoginView
