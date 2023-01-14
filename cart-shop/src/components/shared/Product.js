import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';


//functions
import { shorten ,isInCart , quantityCount} from '../../helper/functions';

//Context
import { cartContext } from '../../contex/CartContextProvider';

//Icons
import trashIcon from '../../assets/Icons/trash.svg';


const Product = ({productData}) => {

  const {state , dispatch}=useContext(cartContext);
  return (
    <div>
      <img src={productData.image} alt="product" width="200px"/>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Detailes</Link>
        <div>
          {
              quantityCount(state , productData.id) ===1  && <button onClick={()=>dispatch({type:"REMOVE_ITEM" , payload:productData})}><img src={trashIcon} alt="trash"/></button>
            }
             {quantityCount(state , productData.id) >1 && <button onClick={()=> dispatch({type:"DECREASE" , payload:productData})}>-</button>} 
       {
        isInCart(state ,productData.id) ? <button onClick={()=> dispatch({type :"INCREASE" , payload:productData})}>+</button>
        : <button onClick={()=> dispatch({type:"ADD_ITEM" , payload:productData})}>Add To Cart</button>
       }

        </div>
      </div>
    </div>
  )
}

export default Product;
