import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from './Card';
import { listAll, searchProducts } from '../redux/actions/productAction';
const Main = () => {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.productData);
  const cart=useSelector((state)=>state.cartData);
  useEffect(()=>{
    dispatch(listAll())
  },[]);
    return (
    <div className='main'>
      <div className="searchBar">
        <input type="text" placeholder="Search" onChange={(event)=>dispatch(searchProducts(event.target.value))} />
      </div>
      <div className='card'>
        {products.map((item)=><Card key={item.id} product={item} cart={cart}/>) }
      </div>
      
    </div>
  )
}

export default Main;