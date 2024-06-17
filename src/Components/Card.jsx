import React from 'react'
import StarRating from './StarRating/StarRating'

const Card = ({prod,cart,dispatch}) => {
    prod.rating=Math.floor(prod.rating);
    const inCart=cart.some((item)=>item.id===prod.id)
   
  return (
    <span key={prod.id} className='m-2 group px-10 py-5  bg-white/10 text-center shadow-lg flex flex-col 
    rounded-lg cursor-pointer relative after:h-full after:bg-yellow-300 after:rounded-lg transition-all duration-300
    z-20 after:-z-20 after:transition-all after:duration-300 after:hover:transition-all
     after:hover:duration-500 after:-translate-y-full after:hover:translate-y-0
    after:absolute after:inset-0 overflow-hidden '>
   <img className='w-44 aspect-square group-hover:bg-gray-400 rounded-full mx-auto transition-all 
   duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 ' src={prod.thumbnail} alt={prod.title}/>
   <p className='   group-hover:text-[#989898] text-black transition-all duration-500 '>{prod.title}</p>
   <div className='flex flex-row justify-center items-center w-full h-full flex-1 mt-5 mb-0'>
   <p className="text-yellow font-semibold group-hover:text-white transition-all duration-500">  &#x20B9;{prod.price} </p>
   </div>
   <StarRating rating={prod.rating}/>
   
  

   <button className="inline-block py-2 px-6 rounded-lg bg-[#989898] hover:bg-white hover:text-[#989898]
    focus:text-[#989898] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-300" onClick={()=>dispatch({type:!inCart?"ADD-TO-CART":"REMOVE-FROM-CART",payload:prod})}>{prod.inStock ?!inCart?"ADD TO CART":"REMOVE":"OUT OF STOCK"}</button>

   </span>
  )
}

export default Card