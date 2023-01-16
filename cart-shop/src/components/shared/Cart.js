import React , {useContext} from 'react';

//functions
import { shorten } from '../../helper/functions';
//context
import { cartContext } from './../../contex/CartContextProvider';
//icons
import trashIcon from '../../assets/Icons/trash.svg';

const Cart = (props) => {
    
    const {dispatch} = useContext(cartContext);
    const {image , title , price , quantity}=props.data;

  return (
    <div>
      <div>
        <img src={image} alt="product"/>
      </div>
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>{quantity}</div>
      <div>
        {
        quantity > 1 ? <button onClick={()=> dispatch({type:"DECREASE" , payload:props.data})}>-</button> :
         <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:props.data})}>
        <img src={trashIcon} alt="trash"/></button>
        }
        <button onClick={()=> dispatch({type:"INCREASE" , payload:props.data})}>+</button>
      </div>
    </div>
  )
}

export default Cart
