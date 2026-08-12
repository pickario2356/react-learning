import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-5'>
        <Link className='font-bold text-xl' to='/contact/men' >Men</Link>
        <Link className='font-bold text-xl' to='/contact/men' >Women</Link>
      </div>
        <h1>Contact</h1>
    </div>
  )
}

export default Contact