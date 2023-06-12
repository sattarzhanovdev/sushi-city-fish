import React from 'react'
import c from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { NavList } from '../../utils'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className={c.container}>  
      <div className={c.navbar}>
        <ul className={c.logo}>
          <li>
            <Link to={'/'}>
              <img 
                src='/img/logo.png'
                alt='logo'
              />
            </Link>
          </li>
        </ul>
        <ul className={c.list}>
          {
            NavList.map(item => (
              <li key={item.id}>
                {item.title}
              </li>
            ))
          }
        </ul>
        <div className={c.right}>
          <ul className={c.shopping_cart}>
            <li>
              <p>
                1
              </p>
              <img 
                src="/icons/shopping cart.svg" 
                alt="shopping cart"
              />
            </li>
          </ul>
          <ul className={c.phone_number}>
            <Link to={'tel:+79932267724'}>
              <h3>
                +7 (993) 226-77-24
              </h3>
            </Link>
            <p>
              Закажите прямо сейчас
            </p>
          </ul>
        </div>
        <ul className={c.bars}>
          <li>
            <FaBars />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar