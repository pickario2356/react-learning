import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Kids from './pages/Kids'

import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='/contact/men' element={<Men />} />
          <Route path='/contact/women' element={<Women />} /> */}

          <Route path='/contact' element={<Contact />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='kiddo' element={<Kids/>} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App