import React from 'react'
import { Components } from '../../components'

const Home = () => {
  return (
    <div>
      <Components.Stocks />
      <div className='btwn_components' style={{ height: '150px' }} id='recomendation'></div>
      <Components.Recomendations />
      <div className='btwn_components'  style={{ height: '150px' }} id='menu'></div>
      <Components.Menu />
    </div>
  )
}

export default Home