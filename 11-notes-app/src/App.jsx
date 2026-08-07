const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
  }
  return (
      <div className='h-screen lg:flex bg-black text-white'>
      <form onClick={(e)=>{
        submitHandler(e)}}  
        className='flex lg:w-1/2 items-start flex-col gap-10 p-10'>
          <h1 className="font-bold text-3xl">Add Notes</h1>
        <input
         type='text' 
         placeholder='Topic'
         className='px-5 font-medium w-full py-2 border-2 rounded '
         ></input>
        <textarea
         type='text' 
         placeholder='Do Not Type here'
         className='h-40 w-full font-medium px-5 py-2  border-2 rounded  '
         ></textarea>
         <button className='bg-white font-medium w-full text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className=" lg:w-3/4 lg:border-l-2 p-7 bg-black">
      <h1 className="text-center font-bold text-2xl mb-5" >Your Notes</h1>
        <div className="flex flex-wrap justify-center overflow-auto h-full ">
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
          <div><img className=' h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img></div> 
  
        </div>        
      {/* <img className='h-80' src='https://cdn.phototourl.com/free/2026-08-07-f6acffc5-60ea-43b1-bd5b-6751bdec9f14.png'></img> */}
      {/* <img className='h-80' src='https://cdn.phototourl.com/free/2026-08-07-0d27a34c-7b0b-4e3e-89fa-bfae8d6dae0b.png'></img> */}
      </div>
    </div>
  )
}

export default App