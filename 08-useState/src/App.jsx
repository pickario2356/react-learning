import React from 'react'
import { useState } from 'react'
import MiniCounter from './components/MiniCounter'

const App = () => {
  // const [num, setNum] = useState('0')
  // const [user, setUser] = useState("robo")
  // function click(){
  //   setNum(67);
  //   setUser('teen')
  // }

  return (
    <div>
      {/* <h1>Our {user} Is {num}</h1>
      <button onClick={click} >click</button> */}
    
        <MiniCounter />
    </div>
    
  )
}

export default App