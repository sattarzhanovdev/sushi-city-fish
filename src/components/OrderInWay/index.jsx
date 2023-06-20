import React from 'react'
import c from './OrderInWay.module.scss'
import useAlert from '../hooks/useAlert'
import { api } from '../../config'

const OrderInWay = ({setState}) => {
  const {actions} = useAlert()

  const successOrder = () => {
    const id = localStorage.getItem('orderId')
    api.SetOrderStatus(id, {status: 'получено'})
    .then(r => {
      r.data && 
        actions.sweetAlert('Приятного аппетита')
        localStorage.removeItem('orderId')
        setState('refresh')
    })
  }
  
  return (
    <div className={c.state}>
      <h2>
        Ваш заказ в пути
      </h2>
       <div className={c.state_btn}>
        <button onClick={successOrder}>Получил(-a) заказ</button>
      </div>
    </div>
  )
}

export default OrderInWay
