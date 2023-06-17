import React from 'react'
import c from './cart.module.scss'

import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../helpers'

const Cart = () => {
  const [data, setData] = React.useState(null)
  const [dep, setDep ] = React.useState('')
  const [totalPrice, setTotalPrice] = React.useState(0)
  const {setActiveCart} = useStateContext()
  const navigate = useNavigate()
  
  const toOrder = () => {
    navigate('/order')
    setActiveCart(false)
  }
  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart && setData(cart)
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.count)
    }, 0)
    setTotalPrice(total)
  }
  
  React.useEffect(() => {
    getCart()
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])


  return (
    <div className={c.cart}>
      <div className={c.container}>
        <ul className={c.cart_titles}>
          <li>
            Название
          </li>
          <li>
            Кол-во
          </li>
          <li>
            Сумма
          </li>
        </ul>
        {
          data?.length >= 1 ? 
          data.map((item, id) => (
            <CartCard {...item} item={item} key={id}/>
          )) : 'empty'
        }
        <div className={c.total_price}>
          Итого: {totalPrice} руб
        </div>
        <div className={c.pay_btn}>
          <button onClick={toOrder}>
            Оплатить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart