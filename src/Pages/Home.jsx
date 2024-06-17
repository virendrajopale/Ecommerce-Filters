import React, { useEffect, useMemo, useState } from 'react'
import { ShoppingCartState } from '../Context/Context'
import Pagination from '../Components/Pagination/Pagination'
import Card from '../Components/Card'
import Filters from '../Components/Filters'
import Category from '../Components/Category'

const Home = () => {
   const {state:{products,cart}, dispatch,
    filterState:{sort,byRating,byStock,searchQuery,byCategory}}= ShoppingCartState()
//    console.log(products.slice(0,10));
// const [products,setProducts]=useState([])
const [page,setPage]=useState(1)
// const [totalPages,setTotalPages]=useState(0)
// const [loading,setLoading]=useState(false)
// const fetchProducts=async()=>{
//     const res=await fetch(`https://dummyjson.com/products?limit=12&skip=${page*10-10}`);
//     const data=await res.json();
//     // console.log(data);
//     if(data && data.products){
        
//         setProducts(data.products)
//         setTotalPages(data?.total/10)
//     }
// }
// useEffect(()=>{
//     fetchProducts()
// },[page])


console.log(cart);
 const filteredProduct=useMemo(()=>{
    let filterproducts=products;
    if(sort){
       return filterproducts=filterproducts.sort((a,b)=>sort=='lowToHigh'?a.price-b.price:b.price-a.price)
    }
    if(!byStock){
         filterproducts=filterproducts.filter((prod)=>prod.inStock)
     }
     if(byRating){
        //  console.log(byRating);
          filterproducts=filterproducts.filter((prod)=>prod.rating>=byRating)
        }
    if(searchQuery){

        filterproducts=filterproducts.filter((prod)=>prod.title.toLowerCase().includes(searchQuery.toLowerCase()))

    } 
    if(byCategory){
         console.log(byCategory);
          filterproducts=filterproducts.filter((prod)=>prod.category==byCategory)
        }
    setPage(1)
    return filterproducts;
    },[sort,byRating,byStock,searchQuery,products,byCategory])
    console.log(byRating);

    const CategoryArray =new Set(filteredProduct?.map((prod)=>prod.category))
    // console.log(CategoryArray);
  return (
   <div>
   <div className='py-9 flex'>
    <Filters/>
  
   {
    filteredProduct?.length>0 && (<div>

        <Category categories={CategoryArray}   />
        <div className=' m-5 p-0 list-none grid grid-cols-3 gap-4'>
            {
                filteredProduct?.slice(page*12-12,page*12).map((prod)=>{
                {/* products?.map((prod)=>{ */}
                    return (
                       <div key={prod.key}>
                        <Card  prod={prod} cart={cart} dispatch={dispatch}/>
                      </div> 
                    )
                })
            }
        </div>
    </div>
    )
   }
   </div>
   {
    filteredProduct?.length>0 && <Pagination page={page} products={filteredProduct} setPage={setPage} />
   }
   </div>
  )
}

export default Home