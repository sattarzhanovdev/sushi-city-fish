import React from 'react'
import c from './cart.module.scss'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../helpers'
import {RxCross2} from 'react-icons/rx'

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
        <span className={c.cross} onClick={() => setActiveCart(false)}>
          <RxCross2/>
        </span>
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
        <div className={data?.length >= 3 ? c.scroll : ''}>
          {
            data?.length > 0 ? 
            data.map((item, id) => (
              <CartCard {...item} item={item} key={id}/>
            )) : <span>Корзина пустая</span>
          }
        </div>
        <div className={c.total_price}>
          Итого: {totalPrice} руб
        </div>
        <div className={c.pay_btn}>
          <button 
            onClick={toOrder}
            disabled={data?.length > 0 ? false : true}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart