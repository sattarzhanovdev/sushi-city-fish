import React from 'react'
import c from './recomendations.module.scss'
import { Components } from '..'
import { api } from '../../config'
import { objToArray } from '../../helpers'

const Recomendations = () => {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    api.GetProducts().then(r => r.data && objToArray(r.data, setData ))
  }, [])

  console.log();
  return (
    <div className={c.container} >
      <div className={c.recomendations}>
        <Components.Title 
          text={'Рекомендации'}
        />
        <div className={c.cards}>

          {
            data?.slice(-4).map(item => (
              <Components.Card 
                id={item.id}
                title={item.title}
                desc={item.desc}
                img={item.image}
                price={item.price}
                mass={item.mass}
                typeMass={item.typeMass}
              />
            ))
          }

          
         

        </div>
      </div>
    </div>
  )
}

export default Recomendations