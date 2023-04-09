import React from 'react'
import {useSelector} from 'react-redux'
import cartImg from '../images/icons8-shopping-cart-64.png'
const Header = () => {
  const productCount=useSelector((state)=>state.cartData)
  return (
    <div className='header'>
      <h1>React Reduct Saga</h1>
      <div>
        <img src={cartImg} alt="" />
        <span>{productCount}</span>
      </div>
    </div>
  )
}

export default Header
