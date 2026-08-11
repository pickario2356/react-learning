import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

const [userData, setUserData] = useState([])
const [index, setIndex] = useState(1)

const getData=async()=>{
  const response =await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=34`)

  // console.log(response.data)
  setUserData(response.data)
}

let printData = <h3 className=' text-gray-300 font-bold text-xs absolute top-1/2 -translate-y-1/2'>Wait a little bit.....</h3>

useEffect(()=>{
  getData()
},[index])

if(userData.length>0){
  printData = userData.map((elem,indx)=>{
      // return indx
      return <div key={indx}>
        <Card elem={elem} />
      </div>
  })
}
  return (
    <div className='bg-black h-screen overflow-auto text-white p-4 '>
      <h1 className='flex flex-wrap justify-center gap-5 py-6'>{printData}</h1>

    <div className='flex gap-5 justify-center'>
      <button className='bg-orange-400 px-4 py-2 text-black font-bold text-xl rounded'
      style={{opacity:index==1?0.5:1}}
      onClick={()=>{
        if(index>1){
          setIndex(index-1)
          setUserData([])
        }
      }}
      >Prev</button>

      <button className=
      'bg-black px-4 py-2 font-bold text-xl rounded'
      >Page {index}</button>      
      
      <button className='bg-orange-400 px-4 py-2 text-black font-bold text-xl rounded'
      onClick={()=>{
        setIndex(index+1)
        setUserData([])
        // ISSE JO CURRENTLY HAI WO SBB HTT JATA HAI AUR NAI LANE KAI LKIYE AUTOMATICVALY USEFFECT WALUI CHIZ KAAM KRNE LG JATI HGAI CZ INDEX CAHNGEBHUA
      }}
      >Next</button>
    </div>

    </div>
  )
}

export default App
 