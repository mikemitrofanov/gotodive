import React from "react"
import "./styles.scss"

import { MenuProvider } from "./Categories/CategoryContext"
import Navigation from "./Navigation"
import AdminRouter from "./AdminRouter"

const AdminApp = () => {
  return (
    <MenuProvider>
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <button
            type="button"
            className="btn btn-link navbar-brand col-sm-3 col-md-2 mr-0"
          >
            Admin panel
          </button>
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
