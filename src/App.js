import React from 'react'
import { Components } from './components'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

const App = () => {
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
        </Routes>
      </main>

      <footer>
        <Components.Footer />
      </footer>
    </div>
  )
}

export default App