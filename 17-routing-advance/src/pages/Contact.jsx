import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-5'>
        <Link className='font-bold text-xl' to='/contact/men' >Men</Link>
        <Link className='font-bold text-xl' to='/contact/women' >Women</Link>
        <Link className='font-bold text-xl' to='/contact/kiddo' >kiddo</Link>
      </div>
        {/* <h1>Contact</h1> */}

        <Outlet />
    </div>
  )
}

export default Contact