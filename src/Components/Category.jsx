import React from 'react'
import { ShoppingCartState } from '../Context/Context'

const Category = ({ categories,prod,dispatch }) => {
    const {filterDispatch}=ShoppingCartState()
  return (
    <div className=" w-[48rem] overflow-x-auto rounded-full no-scrollbar">
      <div className="flex space-x-4">
        {
          Array.from(categories)?.map((cat, index) => {
            return <button onClick={()=>filterDispatch({type:'FILTER_BY_CATEGORY',payload:cat})}  key={index} className="whitespace-nowrap px-4 py-2 bg-gray-200 rounded-full cursor-pointer">{cat}</button>
          })
        }
      </div>
    </div>
  )
}

export default Category
