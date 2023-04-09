import {combineReducers} from 'redux'
import {cartData} from './cartReducer'
const roootReducer=combineReducers({
    cartData,
});

export default roootReducer;