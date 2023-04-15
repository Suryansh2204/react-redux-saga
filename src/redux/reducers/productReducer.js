import { SET_PRODUCTS  } from "../constant";

export const productData=(data=[],action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return [...action.data];
        default:
            return data;
    }
}