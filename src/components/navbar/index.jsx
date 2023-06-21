import React from 'react'
import c from './navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { NavList } from '../../utils'
import Cart from '../cart'
import { scrollTop, useStateContext } from '../../helpers'

const Navbar = () => {
  const [dep, setDep] = React.useState('0')
  const [top, setTop] = React.useState(false)
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

  React.useEffect(() => {
    scrollTop()
  }, [top])


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
          <li>
            <NavLink to={'/'}>
              Главная
            </NavLink>
          </li>
          {
            NavList.map(item => (
              <li key={item.id}>
                <a href={item.route} onClick={() => item.id === 3 && scrollTop()}>
                  {item.title}
                </a>
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
        <ul className={c.shopping_cart_layout} onClick={() => setActiveCart(prev => !prev)}>
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
      </div>
      {
        activeCart && <Cart/>
      }
    </div>
  )
}

export default Navbar