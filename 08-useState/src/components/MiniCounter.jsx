import React from 'react'
import { useState } from 'react'

const miniCounter = () => {
  useState
  const [defa, setDefa] = useState(0)
function inc(){
  setDefa(defa+1)
}
function def(){
  setDefa(defa-1)
}
function from0(){
  setDefa(0)
}
  return (
    <div>
        <h1>{defa}</h1>
        <button onClick={inc}>Increase</button>
        <button onClick={def}>Decrease</button>
        <button onClick={from0}>From 0</button>
    </div>
  )
}

export default miniCounter