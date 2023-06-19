import React from 'react'
import c from './Order.module.scss'
import { Components } from '../../components'
import { scrollTop } from '../../helpers'
import { useForm } from 'react-hook-form'
import { api } from '../../config'
import useAlert from '../../components/hooks/useAlert'
import OrderWaiting from '../../components/orderWaiting'
import OrderInWay from '../../components/OrderInWay'

const Order = () => {
  const [refresh, setRefresh] = React.useState(null)
  const [activeOrder, setActiveOrder] = React.useState(false)
  const cart = JSON.parse(localStorage.getItem('cart'))
  const {actions} = useAlert()
  
  React.useEffect(() => scrollTop(), [])

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB');

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange'
  })


  const handle = (data) => {
    api.PostOrder({
      cart,
      date: formattedDate,
      time: `${date.getHours()}:${date.getMinutes()}`,
      ...data,
      status: 'в ожидании',
    }).then(r => {
      r.data && 
      setActiveOrder('wait')
      actions.sweetAlert('заказ отправлен')
      localStorage.setItem('orderId', r.data.name)
      localStorage.setItem('cart', JSON.stringify([]))
    })

    setRefresh('update')
    reset()
  }

  React.useEffect(() => {
    const orderId = localStorage.getItem('orderId')
    orderId &&
    api.GetOrder(orderId).then(r => 
      r.data &&
      r.data.status === 'в ожидании' 
        ? setActiveOrder('wait'):
        r.data.status === 'Передано курьеру'
        ? setActiveOrder('way') : setActiveOrder('done')
      )
    setTimeout(() => {
      setRefresh(Math.random())
    }, 300000)
  }, [refresh])




  return (
    <div className={c.order}>
      <Components.Title text={'Оформление заказа'}/>
      {
        activeOrder === 'wait' ? <OrderWaiting setState={setActiveOrder} /> : 
        activeOrder === 'way' ? <OrderInWay setState={setActiveOrder}/> :
          <div className={c.container}>
            {
              Object.keys(errors).length > 0 && 
                <span className={c.error_msg}>
                  Заполните все поля!
                </span>
            }
          <form className={c.form} onSubmit={handleSubmit(handle)}>
            <label>
              <span>Имя</span>
              <input 
                type="text" 
                name='name'
                className={errors.name && c.error_inp}
                {...register('name', {
                  required: '⚠ Обязательное поле',
                })}
              />
            </label>
            <label>
              <span>Номер телефона</span>
              <input 
                type="number" 
                name='phone' 
                className={errors.phone && c.error_inp}
                {...register('phone', {
                  required: '⚠ Обязательное поле',
                })}
              />
            </label>
            <label>
              <span>Адрес</span>
              <input 
                type="text" 
                name='address'
                className={errors.address && c.error_inp}
                {...register('address', {
                  required: '⚠ Обязательное поле',
                })}
              />
            </label>
          </form>
          <div className={c.order_btn}>
            <button 
              onClick={handleSubmit(handle)}
              disabled={!isValid}
            >
              Заказать
            </button>
          </div>
        </div>
      }
      
    </div>
  )
}

export default Order
