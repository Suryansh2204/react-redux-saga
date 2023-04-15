import styled from "styled-components";
import prodImg from "../images/Screenshot 2023-04-12 183722.png";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
const Card = (props) => {

  const dispatch = useDispatch();
  const quantity=props.cart.reduce(function(result,item){
    if(item.id===props.product.id){
      const q=item.quantity;
      result.push(q);
    }
    return result;
  },[])

  return (
    <CardStyle>
      <img src={prodImg} alt="" />
      <div className="info">
        <p>Name : {props.product.name}</p>
        <p>Color : {props.product.color}</p>
        <p>Price : {props.product.price}</p>
        <p>Brand : {props.product.brand}</p>
        <p>Category : {props.product.category}</p>
        <div className="btn">
          {!quantity[0] && <button onClick={() => dispatch(addToCart(props.product))}>Add To Cart</button>}
          {quantity[0] && 
            <div className="btn-btn">
              <button className="btn-remove" onClick={() => dispatch(removeFromCart(props.product))}>-</button>
              <span>{quantity}</span>
              <button className="btn-add" onClick={() => dispatch(addToCart(props.product))}>+</button>
            </div>
            }
        </div>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 10px;
  padding: 10px;
  img {
    width: 200px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn{
    button{
        margin: 5px;
    }
  }
`;

export default Card;
