import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 px-8 bg-emerald-700'>
      <h2 className='font-bold text-xl'>Pickachu</h2>
      <div className='flex gap-7'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar