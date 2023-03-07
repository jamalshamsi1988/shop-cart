import React  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

//component
import Cart from './shared/Cart';
//cotext
// import { cartContext } from '../contex/CartContextProvider';
//Actions
import { checkout , clear } from '../redux/cart/cartAction';
//css
import styles from '../components/CartShop.module.css';


const CartShop = () => {

    // const {state , dispatch} = useContext(cartContext);
    const dispatch = useDispatch();
    const state=useSelector(state =>state.cartState)

  return (
    <div className={styles.container}>
     <div className={styles.cartContainer}>
        {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
     </div>
     {
      state.itemsCounter > 0 && <div className={styles.payments}>
        <p><span>Total Items :</span>{state.itemsCounter}</p>
        <p><span>Total Payment :</span>{state.total} $</p>
        <div className={styles.buttonContainer}>
          <button className={styles.checkout} onClick={()=> dispatch(checkout())}>Check Out</button>
          <button className={styles.clear} onClick={()=> dispatch(clear())}>Clear</button>
        </div>
      </div>

     }

     {
      state.checkOut && <div className={styles.complete}>
        <h3>Check Out Sucsessfully</h3>
        <Link to="/products">Buy More</Link>
      </div>
     }

     {
       !state.checkOut && state.itemsCounter === 0 && <div className={styles.complete}>
       <h3>Want to Buy More?</h3>
       <Link to="/products">Go to shop</Link>
     </div>
     }
    </div>
  )
}

export default CartShop
