import React from 'react'
import c from './Card.module.scss'

const Card = ({id, title, img, desc, price, mass}) => {

  const cart = JSON.parse(localStorage.getItem('cart'))
  const check = cart?.find(item => item?.id === id)
  const index = cart?.findIndex(obj => obj.id === id);

  //  React.useEffect(() => {
  //   setTimeout(() => {
  //     const check = cart?.find(item => item?.id === obj?.id)
  //     check ? setActive(true) : setActive(false)
  //     setDep(Math.random())
  //   }, 100)
  // }, [dep])

  const postToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    !check ? cart?.push({id: 1, title: title, desc: desc, mass: mass, price: price, count: 1, image: img}) 
    : cart[index].count = cart[index]?.count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src={img} 
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>{desc.length > 80 ? `${desc.slice(0, 80)}...` : desc}</p>
      <div className={c.down}>
        <div className={c.left}>
          <h3>{price} руб</h3>
          <p>{mass} мл</p>
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