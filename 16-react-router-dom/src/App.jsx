import React from 'react'
import {Route, Router, Routes} from'react-router-dom'
import { Home } from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <h2>Fotter</h2> */}
    </div>
  )
}

export default App
//  / root/home ko represent krta hia