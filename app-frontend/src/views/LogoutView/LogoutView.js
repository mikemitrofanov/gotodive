import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router';
import { logout } from '../../store/actions/actions';

const LogoutView = () => {
  const isAuth = useSelector(state => state.auth.user)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(logout())
    }
  }, [])

  if(isAuth) {
    return null
  } else {
    return <Redirect to="/" />
  }
}

export default LogoutView
