import React from 'react'

const App = () => {

const getInfo=async()=>{
  const joke = await fetch('https://official-joke-api.appspot.com/jokes/random/1')
  const data = await joke.json()
  console.log(data)
}
  return (
    <div>
      <button onClick={getInfo}>Get Info</button>
    </div>
  )
}

export default App