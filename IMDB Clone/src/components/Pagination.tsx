import React from 'react'
import { Button } from '@material-ui/core';

function Pagination({handlePrev , handleNext , pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev}  className='px-8'><button className="fa-solid fa-arrow-left">Prev</button></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext}  className='px-8'><button className="fa-solid fa-arrow-right">Next</button></div>
    </div>
  )
}

export default Pagination