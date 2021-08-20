import React from 'react'
import { Link } from 'react-router-dom'
import { CaretRightFill, Person, Search } from 'react-bootstrap-icons';
import { Query } from '@redux-requests/react';
import { useSelector } from 'react-redux'
import { categoryTypes } from '../../store/types/types'
import './Header.scss';

const dropdownIcon = <CaretRightFill className="dropdown-icon" />
const DropdownList = ({ items }) => (
  <ul className="dropdown-list">
    {items.map((item, index) => (<li className="mb-3" key={index}>
      <Link to={item.link}>
        {item.title}
      </Link>
    </li>))}
  </ul>
)

const Header = () => {
  const user = useSelector(state => state.auth.user)
  const allCategories = useSelector(state => state.categories.categories)
  const searchHandler = () => { /*  */ }

  const sorted = allCategories.sort((a, b) => a.order - b.order)
  const categories = sorted
    .filter(categry => !categry.isSubcategory)
    .map(category => ({
      ...category,
      dropdown: sorted
        .filter(subcategory => subcategory.parentCategory === category.id)
    }))

  categories.unshift(
    {
      title: 'Главная',
      link: '/main'
    }
  )

  categories.push(
    {
      title: 'Галерея',
      link: '/gallery'
    },
    {
      title: 'Прайс',
      link: '/pricing'
    }
  )

  return (
    <header id="main-header" className="font-regular-size-md d-flex justify-content-between">
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              {item.title}
            </Link>

            {item.dropdown ? <>
              {dropdownIcon}
              <DropdownList items={item.dropdown} />
            </> : null}
          </li>
        ))}
      </ul>

      <div>
        <div className="search">
          <div className="input-wrapper">
            <input />
            <button className="search-btn" onClick={searchHandler}>
              <Search />
            </button>
            <span className="divider-line" />
          </div>
        </div>

        <div className="font-medium-size-sm lang mx-5">
          <button>RU</button>
          <button>UKR</button>
          <button>EN</button>
        </div>

        {!!user
          ? (
            <div className="profile">
              <Link className="profile-btn" to="/profile">
                <span className="font-medium-size-sm">
                  {user.name}
                </span>
                <Person size="32px" />
              </Link>
            </div>
          ) : (
            <div className="font-medium-size-sm lang">
              <Link to="/login">Login</Link>
              <Link to="/registration">Registration</Link>
            </div>
          )
        }
      </div>
    </header>
  )
}

export default Header
