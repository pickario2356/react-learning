import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

const [userData, setUserData] = useState([])
const [index, setIndex] = useState(1)

const getData=async()=>{
  const response =await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=34`)

  // console.log(response.data)
  setUserData(response.data)
}

let printData = 'No data here'

useEffect(()=>{
  getData()
},[index])

if(userData.length>0){
  printData = userData.map((elem,indx)=>{
      // return indx
      return <div key={indx}>
        <a href={elem.url}target='_blank'>
        <div className='h-40 w-45 overflow-hidden '>
        <img className='h-full w-full object-cover rounded-2xl ' src={elem.download_url}></img>
      </div>
      <h2 className= 'font-bold text-lg p-1 text-center w-45 text-white'>{elem.author}</h2>
        </a>
      </div>
  })
}
  return (
    <div className='bg-black h-screen overflow-auto text-white p-4 '>
      <h1 className='text-9xl fixed'>{index}</h1>
      <h1 className='flex flex-wrap justify-center gap-5 py-6'>{printData}</h1>

    <div className='flex gap-5 justify-center'>
      <button className='bg-orange-400 px-4 py-2 text-black font-bold text-xl rounded'
      onClick={()=>{
        if(index>1){
          setIndex(index-1)
        }
      }}
      >Prev</button>
      <button className='bg-orange-400 px-4 py-2 text-black font-bold text-xl rounded'
      onClick={()=>{
        setIndex(index+1)
      }}
      >Next</button>
    </div>

    </div>
  )
}

export default App
 