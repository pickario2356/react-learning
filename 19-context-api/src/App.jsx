import React from 'react'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h1>this is navbar</h1>
        <h3>mst ek dum</h3>
      </Navbar>
    </div>
  )
}

export default App