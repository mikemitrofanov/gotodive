import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Categories from "./Categories/Category"
import CategoryEditor from "./Categories/CategoryEditor"

const AdminRouter = () => {
  return (
    <Switch>
      <Route exact path="/admin" render={() => <Redirect to="/admin/categories" />} />
      <Route path="/admin/categories/:id" component={CategoryEditor} />
      <Route path="/admin/categories/" component={Categories} />
    </Switch>
  )
}

export default AdminRouter
