import React from 'react'
import BlankLayout from '../../layouts/BlankLayout/BlankLayout'
import { Link } from 'react-router-dom'

import './LoginView.scss'

import axios from 'axios'
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: 'http://172.20.0.3:8000',
  withCredentials: true
})

const LoginView = () => {
  const loginHandler = async () => {
    const loginres = await instance.post(
      '/api/login',
      { email: 'test@test.com', password: 'pass' },
      {
        withCredentials: true,
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }
    )
    console.log(loginres)
    debugger
  }

  return (
    <BlankLayout>
      <div id="login-view">
        <form onSubmit={e => e.preventDefault()}>
          <h3>Sign In</h3>

          <div className="form-group mb-2">
            <input type="email" className="form-control" placeholder="Email or username" autoFocus />
          </div>

          <div className="form-group mb-2">
            <input type="password" className="form-control" placeholder="Password" />
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
