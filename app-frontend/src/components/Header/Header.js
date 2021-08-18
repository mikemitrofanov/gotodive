import React from 'react'
import { Link } from 'react-router-dom'
import { CaretRightFill } from 'react-bootstrap-icons';
import './Header.scss';

const menuItems = [
  {
    title: 'Главная',
    to: '/main'
  },
  {
    title: 'Дайвинг',
    to: '/diving',
    dropdown: [
      { title: 'Scuba Diving', to: '/scuba-diving' },
      { title: 'Supervised Diver (Scuba Diver)', to: '/supervised-diver' },
      { title: 'Open Water Diver', to: '/open-water-diver' },
    ]
  },
  {
    title: 'Специализации',
    to: '/specializations',
    dropdown: [
      { title: 'Advanced Open Water Divier', to: '/advanced-open-water-diver' },
      { title: 'Recreational Trimix Diver', to: '/recreational-trimix-diver' },
      { title: 'Rescue Diver', to: '/rescue-diver' },
      { title: 'Elite Diver / Master Diver', to: '/elite-master-diver' },
      { title: 'Complex Navigation Diver', to: '/complex-navigation-diver' },
      { title: 'Deep Diver', to: '/deep-diver' },
      { title: 'Drift Diver', to: '/drift-diver' },
      { title: 'Dry Suit Diver', to: '/dty-suit-diver' },
    ]
  },
  {
    title: 'Галерея',
    to: '/gallery'
  },
  {
    title: 'Прайс',
    to: '/pricing'
  },
]

const dropdownIcon = <CaretRightFill className="dropdown-icon" />
const DropdownList = ({ items }) => (
  <ul className="dropdown-list">
    {items.map(item => (<li className="mb-3">
      <Link to={item.to}>
        {item.title}
      </Link>
    </li>))}
  </ul>
)

const Header = () => {
  return (
    <header id="main-header" className="font-regular-size-regular">
      <ul>
        {menuItems.map(item => (
          <li>
            <Link to={item.to}>
              {item.title}
            </Link>

            {item.dropdown ? <>
              {dropdownIcon}
              <DropdownList items={item.dropdown} />
            </> : null}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
