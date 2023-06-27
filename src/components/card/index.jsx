import React from 'react'
import c from './Card.module.scss'
import { useNavigate } from 'react-router-dom'

const Card = ({id, title, img, desc, price, mass, typeMass}) => {

  const navigate = useNavigate()

  const postToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const check = cart?.find(item => item.id === id)
    const index = cart?.findIndex(obj => obj.id === id);

    
    !check ? cart?.push({id, title, desc,  mass, price, count: 1, image: img}) 
    : cart[index].count = cart[index]?.count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <div className={c.card}>
      <div className={c.image} onClick={() => navigate(`product/${id}`)}>
        <img 
          src={img} 
          alt={title}
        />
      </div>
      <h3 onClick={() => navigate(`product/${id}`)}>{title}</h3>
      <p>{desc?.length > 80 ? `${desc?.slice(0, 80)}...` : desc}</p>
      <div className={c.down}>
        <div className={c.left}>
          <h3>{price} руб</h3>
          <p>{mass} {typeMass}</p>
        </div>
        <div className={c.right}>
          <button 
            onClick={() => postToCart()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card