import React from 'react'
import { CategoriesList } from '../../utils'
import c from './categories.module.scss'


const Categories = () => {
  const [ category, setCategory ] = React.useState(1)

  return (
    <div className={c.container}>
      <div className={c.categories}>
        {
          CategoriesList.map(item => (
            <div
              key={item.id}
              className={category === item.id ? c.active : c.category}
              onClick={() => setCategory(item.id)}
            >
              <img 
                src={category === item.id ? item.activeIcon : item.icon}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories