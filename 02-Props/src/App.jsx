import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    <Card user='ghochu' age={3} img="https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user='bhondu' age={88} img="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    {/* <Card/> */}
    </div>   
    
  )
}

export default App