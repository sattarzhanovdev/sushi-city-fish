import React, { useContext } from 'react'
import c from './navbar.module.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { NavList } from '../../utils'
import { FaBars } from 'react-icons/fa'
import Cart from '../cart'
import { useStateContext } from '../../helpers'

const Navbar = () => {
  const [dep, setDep] = React.useState('0')
  const [cartCount, setCartCount] = React.useState(0)
  const {activeCart, setActiveCart} = useStateContext()

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart && setCartCount(cart.length)
  }
  
  React.useEffect(() => {
    getCart()
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])


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
                <NavLink to={item.route}>
                  {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className={c.right}>
          <ul className={c.shopping_cart} onClick={() => setActiveCart(prev => !prev)}>
            <li>
              <p>
                {cartCount}
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
      {
        activeCart && <Cart/>
      }
    </div>
  )
}

export default Navbar