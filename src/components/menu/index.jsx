import React from 'react'
import c from './menu.module.scss'
import { Components } from '..'

const Menu = () => {
  return (
    <div className={c.container}>
      <div className={c.menu}>
        <Components.Title 
          text={"Меню"}
        />
        <Components.Categories /> 
        <div className={c.cards}>
          <Components.Card 
            id={1}
            title={'Мисо суп'}
            desc={'Бульон мисо, шампиньоны,креветки, сыр тофу,водоросли,нори,лук зеленный'}
            img={'https://kj1bcdn.b-cdn.net/media/82732/vegan-miso-soup.jpg'}
            price={269}
            mass={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu