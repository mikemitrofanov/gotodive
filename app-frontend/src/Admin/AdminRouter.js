import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Categories from "./Categories/Category"
import CategoryCreator from "./Categories/CategoryCreator"
import CategoryEditor from "./Categories/CategoryEditor"

const AdminRouter = () => {
  return (
    <Switch>
      <Route path="/admin/categories/new" component={CategoryCreator} />
      <Route path="/admin/categories/:id" component={CategoryEditor} />
      <Route path="/admin/categories/" component={Categories} />
    </Switch>
  )
}

export default AdminRouter
