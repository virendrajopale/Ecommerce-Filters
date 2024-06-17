import React, { useState } from 'react'
import { ShoppingCartState } from '../Context/Context'
import StarRating from '../Components/StarRating/StarRating'

const Cart = () => {
    const {state:{cart},dispatch}=ShoppingCartState()
    console.log(cart);
  return (
    <div className='py-9 flex flex-col gap-5'>
    <div className='text-2xl text-center'>Sub Total &#x20B9;{cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0) } </div>
    {cart?.map((prod)=>{
        return <span key={prod.key} className='flex h-36 border-2 p-5 items-center justify-between'>
            <img src={prod.thumbnail}
                alt={prod.title}
                className=' h-full w-48 object-contain'
            />
            <div className='flex flex-col'>
                <span>{prod.title}</span>
                <span>&#x20B9;{prod.price}</span>
            </div>
            <StarRating rating={prod.rating}/>
            <div className='flex flex-col gap-2'>
                <button onClick={()=> {  dispatch({type:'CHANGE-CART-QTY',payload:prod.qty++})}}>+</button>
            {prod.qty}
                <button onClick={()=> {  dispatch({type:'CHANGE-CART-QTY',payload:prod.qty--})}}>-</button>
                

            </div>
            <button className=' border-2 rounded-full p-3' onClick={()=>{ dispatch({type:"REMOVE-FROM-CART",payload:prod})}}>REMOVE </button>
        </span>
    })}
    </div>
  )
}

export default Cart