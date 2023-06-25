import React from 'react'
import c from './footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={c.container}>
      <div className={c.footer}>
        <div className={c.left}>
          <img 
            src="/img/logo.png" 
            alt="logo"
          />
        </div>
        <div className={c.right}>
          <h3>Суши, Роллы, ВОК, Поке City Fish</h3>
          <p>
            <Link to={'tel:+79932267724'}>
              +7 (993) 226-77-24
            </Link>
            /
            <Link to={'tel:+79932267724'}>
              +7 (993) 226-77-24
            </Link>
          </p>
          <p>
            График работы: с 13:00 до 01:00
          </p>
          <p>
            Адрес: Москва , Уральская улица, 6к1
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer