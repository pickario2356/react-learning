import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

const [userData, setUserData] = useState([])


const getData=async()=>{
  const response =await axios.get(
    'https://picsum.photos/v2/list?page=8&limit=30')

  // console.log(response.data)
  setUserData(response.data)
}

let printData = 'No data here'

useEffect(()=>{
  getData()
},[])

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
      <h1 className='flex flex-wrap gap-5'>{printData}</h1>
    </div>
  )
}

export default App
 