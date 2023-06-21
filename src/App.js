import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'
import axios from 'axios'

axios.defaults.baseURL = 'https://city-fish-default-rtdb.asia-southeast1.firebasedatabase.app/'

const App = () => {

  React.useEffect(() => {
    const cart = localStorage.getItem('cart')
    !cart && localStorage.setItem('cart', JSON.stringify([]))
  }, [])

  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Routes>
          <Route 
            path='/'
            element={<Pages.Home />}
          />
          <Route path='/order' element={<Pages.Order/>}/>
          <Route path='/product/:id' element={<Pages.More />} />
        </Routes>
      </main>

      <footer>
        <Components.Footer />
      </footer>
    </div>
  )
}

export default App