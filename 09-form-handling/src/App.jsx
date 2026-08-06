import React from 'react'

const App = (e) => {
  const submitHandler=(e)=>{
    // console.log(e)
    e.preventDefault()
    console.log("submited")
  }
  return (
    <div>
      <form onSubmit={(e)=>{// e wese kuch value nahi nhi hia but jb onsubnmmit lgta hai usse aati hai
        submitHandler(e)
      }}>
        
        <input type='text' placeholder='Type'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App