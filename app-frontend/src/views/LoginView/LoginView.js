import React from 'react'
import BlankLayout from '../../layouts/BlankLayout/BlankLayout'
import { Link } from 'react-router-dom'

import './LoginView.scss'

const LoginView = () => {
  const loginHandler = () => { }

  return (
    <BlankLayout>
      <div id="login-view">
        <form>
          <h3>Sign In</h3>

          <div className="form-group mb-2">
            <input type="email" className="form-control" placeholder="Email or username" autoFocus />
          </div>

          <div className="form-group mb-2">
            <input type="password" className="form-control" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick="loginHandler">Sign In</button>

          <p className="forgot-password text-right">
            Not registered <Link to="/registration">Sign Up?</Link>
          </p>
        </form>
      </div>
    </BlankLayout>
  )
}

export default LoginView
