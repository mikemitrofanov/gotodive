import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { removeCategoryRequest } from "../../store/actions/actions";

export default function Menus() {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  const removeCategoryHandler = (category) => {
    if (window.confirm(`Remove ${category.title} category?`)) {
      dispatch(removeCategoryRequest(category.id))
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Categories Index</h1>

        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/categories/new">Create New Category</Link>
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
                          className="btn btn-primary btn-xs edit-btn"
                        >
                          Edit
                        </Link>
                        <Button
                          className="btn btn-danger btn-xs ml-3"
                          onClick={() => removeCategoryHandler(category)}
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
