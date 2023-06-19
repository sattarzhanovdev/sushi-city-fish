import React from 'react'
import c from './CartCard.module.scss'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const CartCard = ({item, title, count, image, price}) => {

  const cart = JSON.parse(localStorage.getItem('cart'))
  const check = cart?.find(el => el?.id === item?.id)
  const index = cart?.findIndex(obj => obj.id === item?.id);

  const increment = () => {
    !check ? cart?.push({...item, count: 1}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }  
  
  const deleteItem = () => {
    const index = cart?.findIndex(el => el.id === item.id);
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const decrement = () => {
    !check ? cart?.push({...item, count: 1}) : cart[index].count = cart[index].count - 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if(cart[index].count === 0){
      deleteItem()
    }
  }

  return (
    <div className={c.cart_card}>
      <div className={c.card_title}>
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <div className={c.card_count}>
        <AiOutlineMinus onClick={decrement}/>
        <span>{count}</span>
        <AiOutlinePlus onClick={increment}/>
      </div>
      <div className={c.total}>
        {price * count} руб
      </div>
    </div>
  )
}

export default CartCard