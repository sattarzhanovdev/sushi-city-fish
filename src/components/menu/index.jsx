import React from 'react'
import c from './menu.module.scss'
import { Components } from '..'
import { api } from '../../config'
import { objToArray } from '../../helpers'

const Menu = () => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    api.GetProducts().then(r => {
      objToArray(r.data, setData)
    })
  }, [])

  console.log(data);
  return (
    <div className={c.container}>
      <div className={c.menu}>
        <Components.Title 
          text={"Меню"}
        />
        <Components.Categories /> 
        <div className={c.cards}>
          {
            data?.map((item, id) => (
              <Components.Card 
                key={id}
                id={item.id}
                title={item.title}
                desc={item.desc}
                img={item.image}
                price={item.price}
                mass={item.mass}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu