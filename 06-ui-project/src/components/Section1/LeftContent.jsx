import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <div className='p-6'>
            <div><h3 className='text-5xl font-bold mb-10 leading-[1.1]'>Prospective <br/><span>Customer</span><br/> Segmentation</h3></div>
            <p className='text-xl]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat facere ullam possimus enim magni vel, exercitationem ipsa incidunt quis!</p>
        </div>
        <div><ArrowUpRight size={108} /></div>
    </div>
  )
}

export default LeftContent
