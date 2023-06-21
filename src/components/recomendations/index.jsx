import React from 'react'
import c from './recomendations.module.scss'
import { Components } from '..'

const Recomendations = () => {
  return (
    <div className={c.container} >
      <div className={c.recomendations}>
        <Components.Title 
          text={'Рекомендации'}
        />
        <div className={c.cards}>
          <Components.Card 
            id={1}
            title={'Мисо суп'}
            desc={'Бульон мисо, шампиньоны,креветки, сыр тофу,водоросли,нори,лук зеленный'}
            img={'https://kj1bcdn.b-cdn.net/media/82732/vegan-miso-soup.jpg'}
            price={269}
            mass={200}
          />
          <Components.Card 
            id={1}
            title={'Мисо суп'}
            desc={'Бульон мисо, шампиньоны,креветки, сыр тофу,водоросли,нори,лук зеленный'}
            img={'https://kj1bcdn.b-cdn.net/media/82732/vegan-miso-soup.jpg'}
            price={269}
            mass={200}
          />
          <Components.Card 
            id={1}
            title={'Мисо суп'}
            desc={'Бульон мисо, шампиньоны,креветки, сыр тофу,водоросли,нори,лук зеленный'}
            img={'https://kj1bcdn.b-cdn.net/media/82732/vegan-miso-soup.jpg'}
            price={269}
            mass={200}
          />
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

export default Recomendations