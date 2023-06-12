import React from 'react'
import c from './banner.module.scss'

const Banner = () => {
  return (
    <div className={c.container}>
      <div className={c.banner}>
        <div className={c.left}>
          <h1>
            Вкусные суши на заказ
          </h1>
          <p>
            Быстрая доставка, и самые свежие морепродукты
          </p>
          <button>
            Заказать
          </button>
        </div>
        <div className={c.right}>
          <img 
            src="/img/banner_set.png" 
            alt="set"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner