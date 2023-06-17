import React from 'react'
import c from './Order.module.scss'
import { Components } from '../../components'
import { scrollTop } from '../../helpers'
import { useForm } from 'react-hook-form'
import { api } from '../../config'

const Order = () => {
  const [formData, setFormData] = React.useState(null)
  const cart = JSON.parse(localStorage.getItem('cart'))
  React.useEffect(() => scrollTop(), [])

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB');

  const {
    handleSubmit,
    register,
    reset,
  } = useForm()

  const handle = (data) => {
    setFormData({
      cart,
      date: formattedDate,
      time: `${date.getHours()}:${date.getMinutes()}`,
      ...data,
      status: 'в ожидании',
    })

    api.PostOrder(formData).then(r => console.log(r))

    reset()
  }


  return (
    <div className={c.order}>
      <Components.Title text={'Оформление заказа'}/>
      <div className={c.container}>
        <form className={c.form} onSubmit={handleSubmit(handle)}>
          <label>
            <span>Имя</span>
            <input 
              type="text" 
              name='name'
              {...register('name')}
            />
          </label>
          <label>
            <span>Номер телефона</span>
            <input 
              type="number" 
              name='phone' 
              {...register('phone')}
            />
          </label>
          <label>
            <span>Адрес</span>
            <input 
              type="text" 
              name='address'
              {...register('address')}
            />
          </label>
        </form>
        <div className={c.order_btn}>
          <button onClick={handleSubmit(handle)}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
