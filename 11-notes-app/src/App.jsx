import React from 'react'

const App = () => {
  return (
    <div>
      <form  className='flex justify-between p-10'>
        <input
         type='text' 
         placeholder='Type here'
         className='p-5'
         ></input>
        <input
         type='text' 
         placeholder='Do Not Type here'
         ></input>
      </form>
    </div>
  )
}

export default App