import React from "react"
import "./styles.scss"

import { MenuProvider } from "./Categories/CategoryContext"
import Navigation from "./Navigation"
import AdminRouter from "./AdminRouter"
import { Link } from "react-router-dom"

const AdminApp = () => {
  return (
    <MenuProvider>
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap justify-content-start p-0 shadow">
          <Link
            className="btn btn-link navbar-brand col-sm-3 col-md-2 m-0"
            to="/admin"
          >
            Admin panel
          </Link>

          <Link
            className="btn btn-link navbar-brand col-sm-3 col-md-2 m-0"
            to="/"
          >
            Back to Home
          </Link>

          <div className="flex-grow-1" />

          <Link
            className="btn btn-link navbar-brand col-sm-3 col-md-2 m-0"
            to="/logout"
          >
            Logout
          </Link>
        </nav>

        <div id="main-admin-content" className="container-fluid">
          <div className="row">
            <div className="col-md-2 bg-light">
              <nav className="sidebar" style={{ boxShadow: "none" }}>
                <Navigation />
              </nav>
            </div>
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
              <AdminRouter />
            </main>
          </div>
        </div>
      </div>
    </MenuProvider>
  )
}

export default AdminApp
