import React from 'react'

const Card = (props) => {
  return (
    <a href={props.elem.url}target='_blank'>
        <div className='h-40 w-45 overflow-hidden '>
        <img className='h-full w-full object-cover rounded-2xl '
         src={props.elem.download_url}>
         </img>
      </div>
      <h2 className= 'font-bold text-lg p-1 text-center w-45 text-white'
      >{props.elem.author}</h2>
        </a>
  )
}

export default Card