import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fHww',
      intro:'',
      tag:'Satisfied',
      color:'#2563EB'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underserved',
      color:'#10B981'
    },
    {
      img:'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Unddeserved',
      color:'black'
    },
    {
      img:'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww',
      intro:'',
      tag:'Illuminati',
      color:'#DC2626'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App