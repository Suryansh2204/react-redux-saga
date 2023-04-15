import {combineReducers} from 'redux'
import {cartData,} from './cartReducer'
import { productData } from './productReducer';
const roootReducer=combineReducers({
    cartData,
    productData
});

export default roootReducer;