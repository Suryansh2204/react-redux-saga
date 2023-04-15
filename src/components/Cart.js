import React from "react";
import {
  addToCart,
  removeFromCart,
  removeItem,
} from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import prodImg from "../images/Screenshot 2023-04-12 183722.png";

const Cart = () => {
  const cart = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <div className="cart-data">
          {cart.map((item) => (
            <div key={item.id}>
              <div className="tile">
                <div className="tile-img">
                  <img src={prodImg} alt="" />
                </div>

                <div className="cart-item-info">
                  <table>
                    <thead>
                      <tr className="item-name">{item.name}</tr>
                    </thead>

                    <tbody className="cart-table-body">
                      <tr>
                        <td>Color </td>
                        <td>{item.color}</td>
                      </tr>

                      <tr>
                        <td>Price </td>
                        <td>{item.price}</td>
                      </tr>

                      <tr>
                        <td>Brand </td>
                        <td>{item.brand}</td>
                      </tr>

                      <tr>
                        <td>Category </td>
                        <td>{item.category}</td>
                      </tr>

                      <tr>
                        <td>Quantity</td>
                        <td>
                          <div className="btn-btn">
                            <button
                              className="btn-remove"
                              onClick={() => dispatch(removeFromCart(item))}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn-add"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <i
                            class="fa-solid fa-trash"
                            onClick={() => dispatch(removeItem(item.id))}
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        {cart.length>0 && (
          <div className="calc-data">
            <h1>Amount</h1>
            <table>
              <thead>
                <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>x</td>
                  <td>Quantity</td>
                  <td>=</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
              {cart.map((item)=>(
                <tr className="calc">
                  <td id="name">{item.name}</td>
                  <td>{item.price}</td>
                  <td>x</td>
                  <td>{item.quantity}</td>
                  <td>=</td>
                  <td>{item.price*item.quantity}</td>
                </tr>))}
              </tbody>
            </table>
              <h4>Total = Rs. {cart.map((item)=>item.quantity*item.price).reduce((prev,next)=>prev+next)}</h4>
          </div>
        )}
      </div>
      {!cart.length && <div className="nothing"><h2>There's nothing in your Cart</h2></div>}
    </>
  );
};

export default Cart;
