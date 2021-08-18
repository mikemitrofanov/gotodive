import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CaretRightFill } from 'react-bootstrap-icons';
import { Query } from '@redux-requests/react';
import { useDispatch } from 'react-redux'
import { categoryTypes } from '../../store/types/types'
import { fetchCategories } from '../../store/actions/actions'
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <header id="main-header" className="font-regular-size-regular">
      <ul>
        <Query
          type={categoryTypes.FETCH_CATEGORIES}
        >
          {({ data }) => {
            const sorted = data.sort((a, b) => a.order - b.order)
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

            return categories.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  {item.title}
                </Link>

                {item.dropdown ? <>
                  {dropdownIcon}
                  <DropdownList items={item.dropdown} />
                </> : null}
              </li>
            ))
          }}
        </Query>
      </ul>
    </header>
  )
}

export default Header
