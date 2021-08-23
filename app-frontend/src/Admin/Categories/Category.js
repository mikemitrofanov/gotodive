import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { NotificationManager } from 'react-notifications'
import { MenuContext } from "./CategoryContext";

export default function Menus() {
  const categories = useSelector(state => state.categories.categories)
  const removeCategoryHandler = () => {
    NotificationManager.warning('TODO: this handler')
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Menu Index</h1>

        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/menu/new">Create New Menu</Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Redirect To</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(category => (
                    <tr key={category.id}>
                      <td>{category.title}</td>
                      <td>
                        <Link to={'/' + category.link} target="_blank">
                          /{category.link}
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/admin/categories/${category.id}`}
                          className="btn btn-primary btn-xs"
                        >
                          Edit
                        </Link>
                        <Button
                          className="btn btn-danger btn-xs"
                          onClick={removeCategoryHandler}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
