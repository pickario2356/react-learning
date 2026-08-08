import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask=[...task]
    copyTask.push({title,content})// nrml words ya sting mai copy ki need nahi cuz humko direct value hi mil rahi hai to wohi value update hojati hai
    // console.log(task)// pehle wala khali cuz pehle click sai setTask hua jo async task hai toh next time mai ata hai jo cahiaye
    setTask(copyTask)// toh object/array mai nrml way sai wohi title aur contenty bs update hongi naki nai aaygi

    // console.log(copyTask)
    setTitle('')
    setContent('')
  }
    const deleteBtn=(idx)=>{
      const copyTask2=[...task]// console.log(copyTask2)
      // console.log(copyTask2[idx])

      copyTask2.splice(idx,1)
      setTask(copyTask2)
    }
  return (
      <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)}}  
        className='flex lg:w-1/2 items-start flex-col gap-10 p-10'>
          <h1 className="font-bold text-3xl">Add Notes</h1>

          {/* pehla */}
        <input
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         type='text' 
         placeholder='Topic'
         className='px-5 font-medium w-full py-2 border-2 rounded '
         ></input>

         {/* dusra */}
        <textarea
        value={content}
        onChange={(e)=>{
          setContent(e.target.value)
        }}
         placeholder='Do Not Type here'
         className='h-40 w-full font-medium px-5 py-2  border-2 rounded  '
         ></textarea>
         <button className='bg-white font-medium w-full text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className=" lg:w-3/4 lg:border-l-2 p-7 bg-black">
      <h1 className="text-center font-bold text-2xl mb-5" >Your Notes</h1>
        <div className=" flex flex-wrap justify-center gap-5 overflow-auto h-[90%] ">
        {task.map((elem,idx)=>{
          return <div key={idx} className="rounded-xl flex flex-col justify-between py-4 h-62 w-48 p bg-cover bg-[url('https://cdn.phototourl.com/free/2026-08-08-e2a6de47-d538-4901-99f8-941e97f13fd1.png')] text-black">
            <div className="w-48">
            <h3 className="text-[0.9rem] mr-2 px-5 text-center ml-2 font-bold wrap-break-word text-rose-900 leading-tight">{elem.title}</h3>
            <p className="mt-2 leading-3 font-light px-5 ml-2 text-center text-[0.7rem] wrap-break-word text-gray-700">{elem.content}</p>
            </div>
            <div className="flex justify-center ">
              <button onClick={()=>{
                deleteBtn(idx)
              }} className="bg-red-400 cursor-pointer border-b-2 active:scale-80 rounded-4xl text-xs px-2">Delete</button>
            </div>
          </div>      
        })}
        </div>      

      {/* <img className='h-80' src='https://cdn.phototourl.com/free/2026-08-07-5431dd90-6b74-4630-8b1c-67ae9adff9a1.png'></img> */}

      {/* <img className='h-80' src='https://cdn.phototourl.com/free/2026-08-07-f6acffc5-60ea-43b1-bd5b-6751bdec9f14.png'></img> */}
      {/* <img className='h-80' src='https://cdn.phototourl.com/free/2026-08-08-e2a6de47-d538-4901-99f8-941e97f13fd1.png'></img> */}
      </div>
    </div>
  )
}

export default App