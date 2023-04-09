import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart, emptyCart, removeFromCart } from '../redux/actions/cartActions';
const Main = () => {
  const dispatch=useDispatch();
  return (
    <div>
      <div><button onClick={()=>dispatch(addToCart())}>Add To Cart</button></div>
      <div><button onClick={()=>dispatch(removeFromCart())}>Remove From Cart</button></div>
      <div><button onClick={()=>dispatch(emptyCart())}>Empty Cart</button></div>
      <div><button>List Cart Items</button></div>
    </div>
  )
}

export default Main;