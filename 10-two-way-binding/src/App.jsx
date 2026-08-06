import React, { useState } from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(e)
    console.log("submited by",text)
  }
  const [text, setText] = useState('')

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        
        <input 
        type='text' 
        placeholder='Type here'
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
          // console.log(e.target.value)
        }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App