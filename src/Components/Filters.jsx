import React, { useEffect } from 'react'
import { ShoppingCartState } from '../Context/Context'
import StarRating from './StarRating/StarRating';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const FilterMap={
    sort:'SORT_BY_PRICE',
    byRating:"FILTER_BY_RATING",
    byStock:"FILTER_BY_STOCK",
    searchQuery:"SEARCH",
    byCategory:"FILTER_BY_CATEGORY",
}

const Filters = () => {
    const {filterState,filterDispatch}=ShoppingCartState();
    const {byStock,byRating,sort}=filterState;
    // console.log(byRating);

    const [searchParams,setSearchParams]=useSearchParams()
useEffect(()=>{
    if(searchParams.size){
        searchParams.forEach((value,key)=>{
            filterDispatch({
                type:FilterMap[key],
                payload:value
            })
        })
    }
},[])
useEffect(()=>{
 setSearchParams(filterState)
},[filterState])

  return (
    <div className='flex flex-col w-56 gap-2 px-2 items-start'>
    <span>Filter Products</span>
    <span className='  cursor-pointer inline-block py-2 px-6 rounded-lg bg-[#989898] hover:bg-white hover:text-[#989898] hover:outline
    focus:text-[#989898] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-300'>
        <input type='radio' className='mr-2 relative cursor-pointer text-2xl ' id='ascending' name='sort'
            onClick={()=>filterDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh"
            })}
            checked={sort=='lowToHigh'?true:false}
        />
        <label htmlFor='ascending'> Low To High </label>
    </span>
    <span className=' cursor-pointer inline-block py-2 px-6 rounded-lg bg-[#989898] hover:bg-white hover:text-[#989898] hover:outline
    focus:text-[#989898] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-300'>
        <input type='radio' className='mr-2 ' id='descending' name='sort'
            onClick={()=>filterDispatch({
                type:"SORT_BY_PRICE",
                payload:"highToLow"
            })}
            checked={sort=='highToLow'?true:false}
        />
        <label htmlFor='descending'>Descending</label>
    </span>
    <span className='cursor-pointer inline-block py-2 px-6 rounded-lg bg-[#989898] hover:bg-white hover:text-[#989898] hover:outline
    focus:text-[#989898] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-300'>
        <input type='checkbox' className='mr-2 ' id='outofstock' name='outofstock'
            onClick={()=>filterDispatch({
                type:"FILTER_BY_STOCK",
                payload:!byStock
            })}
            checked={byStock}
        />
        <label htmlFor='outofstock'> Out Of Stock</label>
    </span>
    <span className='flex items-center'>
            <label className='p-2'>Rating</label>
            <StarRating
             rating={byRating}
                onChange={(i)=>filterDispatch({
                    type:'FILTER_BY_RATING',
                    payload:i,})
                }
            />
    </span>
    <button className=' bg-slate-500 px-4 text-white rounded-full' onClick={()=>filterDispatch({type:"CLEAR"})}>Clear</button>
    </div>
  )
}

export default Filters