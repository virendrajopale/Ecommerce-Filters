import React from 'react'

const Loader = () => {
  return (
    <div className='flex gap-3 justify-center items-center  '>
    <div className=' h-3 w-3 bg-gray-600 rounded-full animate-[bouncing_0.5s_0.0s_ease-in-out_infinite_alternate]'></div>
    <div className=' h-3 w-3 bg-gray-600 rounded-full animate-[bouncing_0.5s_0.1s_ease-in-out_infinite_alternate] delay-300'></div>
    <div className=' h-3 w-3 bg-gray-600 rounded-full animate-[bouncing_0.5s_0.2s_ease-in-out_infinite_alternate] delay-500' ></div>
    </div>
  )
}

export default Loader