import React from 'react'
import { Components } from '../../components'

const Home = () => {
  return (
    <div>
      <Components.Stocks />
      <Components.Recomendations />
      <Components.Menu />
    </div>
  )
}

export default Home