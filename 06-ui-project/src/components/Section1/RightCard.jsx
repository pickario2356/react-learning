import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl  shrink-0'>
        <img className='h-full object-cover ' src={props.img}></img>
        <RightCardContent id={props.id+1} color={props.color} tag= {props.tag}/>
        
    </div>
  )
}

export default RightCard