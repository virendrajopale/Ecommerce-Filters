import { createContext, useContext, useEffect, useReducer } from "react";
import { FilterReducer, ShoppingCartReducer } from "./Reducer";

const ShoppingCart=createContext();
export const Context=({children})=>{

    const [state,dispatch]=useReducer(ShoppingCartReducer,{
        products:[],
        cart:[]
    })
    const fetchProducts=async()=>{
       const res=await fetch('/products.json')
       const data=await res.json();
    //    console.log(data);
       if(data && data.products){
         dispatch({
            type:"FETCH-PRODUCTS",
            payload:data.products
         })
       }
    }

    const [filterState,filterDispatch]=useReducer(FilterReducer,{
        byStock:false,
        byRating:0,
        byCategory:"",
        searchQuery:"",

       
    })
    useEffect(()=>{
        fetchProducts()
    },[])
    return <ShoppingCart.Provider value={{state,dispatch,filterState,filterDispatch}}>{children}</ShoppingCart.Provider>
}

export const ShoppingCartState=()=>{
     return useContext(ShoppingCart)
}