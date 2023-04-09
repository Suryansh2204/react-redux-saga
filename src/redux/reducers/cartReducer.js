import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constant";

export const cartData=(data=0,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return data+1;
        case REMOVE_FROM_CART:
            data=data>0?data-1:0;
            return data;
        case EMPTY_CART:
            data=0
            return data;
        default:
            return data;
    }
}