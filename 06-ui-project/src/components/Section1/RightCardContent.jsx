import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
    console.log(props.color)
  return (
    <div className='
        h-full w-full
        top-0 left-0 absolute flex flex-col justify-between p-8'>
            <h2 className='bg-white rounded-full w-11 h-11 font-bold flex justify-center items-center text-2xl'>{props.id}</h2>
            <div><p className='text-white leading-relaxed text-lg mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto, ducimus voluptatem quo tenetur possimus.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='text-white px-2 py-2 bg-blue-600 rounded-full'><ArrowRight /></button>     
                </div>
            </div>
        </div>
  )
}

export default RightCardContent