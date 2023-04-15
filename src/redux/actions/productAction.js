import { LIST_PRODUCTS, SEARCH_PRODUCTS } from "../constant"
export const listAll=()=>{
    return{
        type:LIST_PRODUCTS
    }
}
export const searchProducts=(query)=>{
    return{
        type:SEARCH_PRODUCTS,
        query
    }
}