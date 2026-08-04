import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
console.log(props.color)
  return (
    <div id='right' className='h-full w-2/3 p-8 overflow-x-auto flex gap-10'>
      {props.users.map((elem,idx)=>{
        // ye elem props users mai sai jo bhi chiz aa rhai hai usko elem kai var maisav krr rra hai oth elem kai  andr hai props.user ki chize toh elem .img krna hoga for img
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent