import React from 'react'
import { Components } from '../../components'

const Home = () => {
  return (
    <div>
      {/* <div id='stocks'></div> */}
      <Components.Stocks />
      <div style={{ height: '150px' }} id='recomendation'></div>
      <Components.Recomendations />
      <div style={{ height: '150px' }} id='menu'></div>
      <Components.Menu />
    </div>
  )
}

export default Home