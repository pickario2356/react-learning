import React from 'react'
import {useNavigate} from 'react-router-dom'


const Navbar2 = () => {

  const navigate = useNavigate();   // link vgera khud click krna nota hia but navigate js ka code btata hai jese function

  return (
    <div className='bg-gray-500'>
        <button 
      className='
      bg-blue-900 px-2 py-1 ml-5 my-2 rounded-xl cursor-pointer active:scale-95'
      onClick={()=>{
        navigate('/')// navigate("/about")= “User ko /about route par le jao.”
      }} 
      >Return to Home page
      </button>

      <button 
      className='
      bg-red-900 px-2 py-1 ml-5 my-2 rounded-xl cursor-pointer active:scale-95'
      onClick={()=>{
        navigate(-1)
      }}  
      >Back</button>

      <button 
      className='
      bg-purple-500 px-2 py-1 ml-5 my-2 rounded-xl cursor-pointer active:scale-95'
      onClick={()=>{
        navigate(+1)
      }}  
      >Next</button>
    </div>
  )
}

export default Navbar2