import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="pt-2">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/categories" className="nav-link">
            Categories
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/page" className="nav-link">
            Site Settings
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
