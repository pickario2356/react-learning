import React from 'react'

const getInfo=async()=>{
  const joke = await fetch('https://official-joke-api.appspot.com/jokes/random/1')
  const data = await joke.json()
  console.log(data)
}
const Fetch = () => {
  return (
    <div>
      <button onClick={getInfo}>Get Info</button>
    </div>
  )
}

export default Fetch