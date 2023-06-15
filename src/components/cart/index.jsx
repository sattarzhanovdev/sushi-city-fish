import React from 'react'
import c from './cart.module.scss'

import CartCard from './CartCard'

const Cart = () => {
  const [data, setData] = React.useState(null)
  const [ dep, setDep ] = React.useState('')

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart && setData(cart)
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
          data.map(item => (
            <CartCard {...item} item={item} />
          )) : 'empty'
        }
        <div className={c.total_price}>
          Итого: 260 руб
        </div>
        <div className={c.pay_btn}>
          <button >
          Оплатить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart