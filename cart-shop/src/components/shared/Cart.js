import React  from 'react';
import { useDispatch } from 'react-redux';

//functions
import { shorten } from '../../helper/functions';
//context
// import { cartContext } from './../../contex/CartContextProvider';
//Actions
import { increase , decrease , removeItem} from '../../redux/cart/cartAction';
//icons
import trashIcon from '../../assets/Icons/trash.svg';
//css
import styles from '../shared/Cart.module.css';

const Cart = (props) => {
    
    // const {dispatch} = useContext(cartContext);
    const dispatch=useDispatch();
    const {image , title , price , quantity}=props.data;

  return (
    <div className={styles.container}>
        <img  className={styles.productImage} src={image} alt="product"/>
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div><span className={styles.quantity}>{quantity}</span></div>

      <div className={styles.buttonContainer}> 
        {
        quantity > 1 ? <button onClick={()=> dispatch(decrease(props.data))}>-</button> :
         <button onClick={()=> dispatch(removeItem(props.data))}>
        <img src={trashIcon} alt="trash"/></button>
        }
        <button onClick={()=> dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  )
}

export default Cart
