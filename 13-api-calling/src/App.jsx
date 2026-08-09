import axios from 'axios'
import { useState } from 'react'

const App = () => {
const [data, setData] = useState([])
  const getData=async()=>{
    let response =await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>For Axios</button>
      <div>
        {data.map((elem,idx)=>{
          return <h1 key={idx}>{idx} Yohoho from {elem.author} </h1>
        })}
      </div>
    </div>
  )
}

export default App