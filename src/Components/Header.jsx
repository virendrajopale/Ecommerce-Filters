import React from 'react'
import { ShoppingCartState } from '../Context/Context';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
motion
    const {state:{cart},filterState:{searchQuery},filterDispatch}=ShoppingCartState();

  return (
    <nav className='h-fit flex items-center justify-between bg-yellow-700 p-2'>
    <Link to={'/'}>

    <motion.h2  whileHover={{scale:1.2}} className='text-2xl font-mono text-white'>

        Shop Here
    </motion.h2>
    </Link>
    <div className='flex justify-center items-center'>
    <div className=' relative'>
    
    <input type='text' placeholder='typing...' value={searchQuery} onChange={(e)=>filterDispatch({type:"SEARCH",payload:e.target.value})} 
          className='text-white border-b border-gray-300 py-1 focus:border-b-2 focus:border-yellow-300 transition-colors focus:outline-none peer bg-inherit'

    />
    </div>
    </div>
    <Link to={'/cart'}>
        <button className='px-2 py-2 text-white'>
            Cart ({cart?.length})
        </button>
    </Link>
    </nav>
  )
}

export default Header