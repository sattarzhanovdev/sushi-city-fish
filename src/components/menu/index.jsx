import React from 'react'
import c from './menu.module.scss'
import { Components } from '..'
import { api } from '../../config'
import { objToArray } from '../../helpers'

const Menu = () => {
  const [data, setData] = React.useState(null)
  const [filteredData, setFilteredData] = React.useState(null)
  const [activeCategory, setActiveCategory] = React.useState('')

  React.useEffect(() => {
    api.GetProducts().then(r => {
      objToArray(r.data, setData)
    })
  }, [])

  React.useEffect(() => {
    const filtered = data?.filter(item => item.category === activeCategory)
    filtered && setFilteredData(filtered)
  }, [activeCategory])



  return (
    <div className={c.container} >
      <div className={c.menu}>
        <Components.Title 
          text={"Меню"}
        />
        <Components.Categories category={activeCategory} setCategory={setActiveCategory}/> 
        <div className={c.cards}>
          {
            !filteredData && 
            data?.map((item, id) => (
              <Components.Card 
                key={id}
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
          {
            filteredData?.map((item, id) => (
              <Components.Card 
                key={id}
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

export default Menu