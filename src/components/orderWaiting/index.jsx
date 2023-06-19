import React from 'react'
import c from './OrderWaiting.module.scss'
import { api } from '../../config'
import useAlert from '../hooks/useAlert'

const OrderWaiting = ({setState}) => {
  const {actions} = useAlert()

  const cancelOrder = () => {
    const id = localStorage.getItem('orderId')
    api.SetOrderStatus(id, {status: 'отменено'})
    .then(r => {
      r.data && 
        actions.sweetAlert('Ваш заказ отменён')
        localStorage.removeItem('orderId')
        setState('update')
    })
  }
  
  return (
    <div className={c.state}>
      <h2>
        Ваш заказ в ожидании
      </h2>
      <div className={c.state_btn}>
        <button onClick={cancelOrder}>Отменить заказ</button>
      </div>
    </div>
  )
}

export default OrderWaiting
