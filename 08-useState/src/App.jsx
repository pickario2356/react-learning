import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState('0')
  // const [user, setUser] = useState("robo")
  // function click(){setNum(67);setUser('teen')}

    // const [prsn, setPrsn] = useState({user:'Sharukh',age:"67"})
    
    // const btnClick=()=>{
    //   const newPrsn ={...prsn}
    //   newPrsn.user='Jonny';newPrsn.age="2"
    //   setPrsn(newPrsn)}

    // const btnClick=()=>{
    // setPrsn(prev=>({...prev,user:"alex",age:9}))}
    
    const [num, setNum] = useState(10)
    const btnClick=()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    // prev yaha curr state de ra hai
  }
  return (
    <div>
      {/* <h1>Our {user} Is {num}</h1>
      <button onClick={click} >click</button> */}

      {/* <h1>Our {prsn.user},{prsn.age}</h1>
      <button onClick={btnClick} >click</button> */}

      <h1>Our {num}</h1>
      <button onClick={btnClick} >click</button>

    </div>
    
  )
}

export default App