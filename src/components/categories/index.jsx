import React from 'react'
import { CategoriesList, rollsTypes } from '../../utils'
import c from './categories.module.scss'


const Categories = ({setCategory, category}) => {
  

  return (
    <div className={c.container}>
      <div className={c.categories}>
        {
          CategoriesList.map(item => (
            <div
              key={item.id}
              className={category === item.title ? c.active : c.category}
              onClick={() => setCategory(item.title)}
            >
              <img 
                src={category === item.title ? item.activeIcon : item.icon}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
      {
        category === 'Роллы' || category === 'Классические роллы' || category === 'Запеченные роллы' || category === 'Жаренные роллы' ?
        <div className={c.rolls}>
          <select onChange={e => setCategory(e.target.value === 'all' ? 'Роллы' : e.target.value)}>
            <option value='all' selected>Все</option>              
            {
              rollsTypes.map(item => (
                <option value={item.title} key={item.id}>{item.title}</option>              
              ))
            }
          </select>
        </div> : 
        null
      }
    </div>
  )
}

export default Categories