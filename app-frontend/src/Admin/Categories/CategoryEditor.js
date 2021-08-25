import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useHistory } from "react-router-dom"
import Select from "react-select"
import { NotificationManager } from 'react-notifications'
import { ArrowLeft } from 'react-bootstrap-icons'
import { createCategoryRequest, fetchCategoryByIdRequest, updateCategoryRequest } from "../../store/actions/actions"
import CheckField from './CheckField'

const UrlSafeString = require('url-safe-string')
const tagGenerator = new UrlSafeString()

export default function MenuEditor() {
  const { id } = useParams();
  const isCreate = id === 'new'
  const history = useHistory()

  const categories = useSelector(state => state.categories.categories).map(item => ({
    ...item,
    label: item.title,
    value: item.id,
  }))
  const dispatch = useDispatch()

  const [category, setCategory] = useState({
    title: '',
    link: '',
    isSubcategory: 0,
    parentCategory: null
  })
  const setCategoryField = (field, value) => {
    const updated = { ...category }
    updated[field] = value

    // if (field === 'title') {
    //   updated.link = tagGenerator.generate(value)
    // }

    setCategory(updated)
  }

  useEffect(() => {
    if (!isCreate) {
      dispatch(fetchCategoryByIdRequest(id))
        .then(res => setCategory(res.data.category))
    }
  }, [])

  function createCategoryHandler(event) {
    event.preventDefault();

    const promise = isCreate
      ? dispatch(createCategoryRequest(category))
      : dispatch(updateCategoryRequest(id, category))

    promise.then(res => {
      if (res.error) {
        NotificationManager.error(res.error.response?.data.message)
      } else {
        NotificationManager.info(`Category ${isCreate ? 'created' : 'updated'}`)
        if (isCreate) {
          history.push('/admin/categories');
        }
      }
    })
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <Link to="/admin/categories" className="btn">
            <ArrowLeft />
          </Link>
          {isCreate ? 'Create' : 'Edit'} Category
        </h1>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={e => createCategoryHandler(e)}>
            <div className="form-group row mb-1">
              <label className="col-form-label col-sm-3">Title: *</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={category.title}
                  required={true}
                  className="form-control"
                  onChange={event => setCategoryField('title', event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row mb-1">
              <label className="col-form-label col-sm-3">Redirect To: *</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={category.link}
                  required={true}
                  className="form-control"
                  onChange={event => setCategoryField('link', event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row mb-1">
              <label className="col-form-label col-sm-3">Is Subcategory: *</label>
              <div className="col-sm-9">
                <CheckField
                  label="Is subcategory"
                  checked={!!category.isSubcategory}
                  onChange={event => setCategoryField('isSubcategory', event.target.checked ? 1 : 0)}
                />
              </div>
            </div>

            {category.isSubcategory ? <div className="form-group row mb-1">
              <label className="col-form-label col-sm-3">Parent category: *</label>
              <div className="col-sm-9">
                <Select
                  value={categories.find(item => item.value === category.parentCategory)}
                  className="reactSelectContainer"
                  classNamePrefix="reactSelect"
                  isClearable={true}
                  onChange={selectedOption => setCategoryField('parentCategory', selectedOption ? selectedOption.value : null)}
                  options={categories.filter(item => item.isSubcategory === 0)}
                />
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "1px",
                    border: "0px",
                    padding: "0px",
                    position: "absolute",
                    opacity: 0
                  }}
                />
              </div>
            </div> : null}

            <button type="submit" className="btn btn-primary">
              {isCreate ? 'Create' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
