import React from 'react'
import { Components } from '../../components'

const Home = () => {
  return (
    <div>
      <Components.Banner />
      <Components.Recomendations />
      <Components.Menu />
      <Components.Stocks />
    </div>
  )
}

export default Home