import React from 'react'


import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center bg-[#042ee8] text-[#fbf9f9] pl-3 py-4'>
        <h1 className=' ml-2 md:ml-7 bg-yellow-400 text-black font-extrabold text-xl px-1.5 py-0.5 rounded-sm'>IMDb</h1>
       
        <Link to='/' className=' text-xl font-bold'>Movies</Link>

        <Link to='/watchlist' className=' text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar