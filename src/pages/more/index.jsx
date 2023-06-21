import React from 'react'
import c from './more.module.scss'
import Title from '../../components/title'
import { api } from '../../config'
import { useParams } from 'react-router-dom'
import {BiPlus, BiMinus} from 'react-icons/bi'
import {SlBasket} from 'react-icons/sl'
import { scrollTop } from '../../helpers'

const More = () => {
  const { id } = useParams()
  const [product, setProducts] = React.useState(null)
  const [cart, setCart] = React.useState(null)
  const [dep, setDep] = React.useState(0)

  const check = cart?.find(item => item.id === id)
  const index = cart?.findIndex(obj => obj.id === id);

  React.useEffect(() => {
    scrollTop()
    api.GetSingleProduct(id).then(r => r.data && setProducts(r.data))
  }, [])

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'))
    setCart(data)
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])

   const postToCart = () => {
    !check && cart?.push({...product, count: 1})
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  const increment = () => {
    !check ? cart?.push({...product, count: 1}) 
    : cart[index].count = cart[index].count + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  const decrement = () => {
    !check ? cart?.push({...product, count: 1}) 
    : cart[index].count = cart[index].count - 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if(cart[index]?.count === 0){
      deleteItem()
    }
  }

  const deleteItem = () => {
    const index = cart?.findIndex(item => item.id === product?.id);
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <div className={c.more}>
      <div className={c.title}>
        <Title text={product?.title}/>
      </div>
      <div className={c.details}>
        <div className={c.left}>
          <img 
            src={product?.image}
            alt=""
          />
        </div>
        <div className={c.right}>
          <h2>{product?.title}</h2>
          <h1>{product?.price} руб</h1>
          {
            check ?
              <div className={c.quantity}>
                <h4>Кол-во</h4>
                <ul>
                  <li
                    onClick={decrement}
                  >
                    <BiMinus />
                  </li>
                  <input
                    type="text"
                    value={cart[index]?.count ? cart[index]?.count : 1}
                  />
                  <li
                    onClick={increment}
                  >
                    <BiPlus />
                  </li>
                </ul>
              </div> : null
          }
          <button className={check ? c.active : ''} onClick={() => postToCart()}>
            <SlBasket /> {check ? 'В корзине' : 'В корзину'}
          </button>
          <p className={c.desc}>масса:</p>
          <p>
            {product?.mass}г
          </p>
          <p className={c.desc}>Описание:</p>
          <p>
            {product?.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default More
