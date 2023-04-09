import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constant"

export const addToCart=()=>{
    return{
        type:ADD_TO_CART,
        data:"added"
    }
}
export const removeFromCart=()=>{
    return{
        type:REMOVE_FROM_CART,
        data:"removed"
    }
}
export const emptyCart=()=>{
    return{
        type:EMPTY_CART,
        data:"clear all"
    }
}