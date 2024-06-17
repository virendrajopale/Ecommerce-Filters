import { act } from "react";
import { json } from "react-router-dom";

export const ShoppingCartReducer=(state,action)=>{
    switch (action.type) {
        case "FETCH-PRODUCTS":
            return {
                ...state,
                products:action.payload
            }
          case "ADD-TO-CART":
            return {
                ...state,
                cart:[...state.cart,{...action.payload,qty:1}]
            }
          case "REMOVE-FROM-CART":
            return {
                ...state,
                cart:state.cart.filter((prd)=>prd.id!==action.payload.id)
            }
            case "CHANGE-CART-QTY":
                console.log(action.payload)
            return {
                ...state,
                cart:state.cart.filter((prd)=>prd.id==action.payload.id?(prd.qty=action.payload.qty):prd.qty)
            }
           
    
        default:
          return {...state}
    }
}

export const FilterReducer=(state,action)=>{
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return{
                ...state,
                sort:action.payload
            }
        case 'FILTER_BY_STOCK':

            return{
                    ...state,
                    byStock:JSON.parse(action.payload)
                }
        case 'FILTER_BY_RATING':
            return{
                ...state,
                byRating:action.payload
            }
           case 'FILTER_BY_CATEGORY':
            return{
                ...state,
                byCategory:action.payload
            }
            
            case 'SEARCH':

                return{
                ...state,
                searchQuery:action.payload
                        }

         case 'CLEAR':
                return{
                    byStock:false,
                    byRating:0,
                    searchQuery:"",
                    byCategory:""
                        }
                        

    }
}