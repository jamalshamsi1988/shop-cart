import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';
//cotext
import { cartContext } from '../contex/CartContextProvider';
//css
import styles from '../components/CartShop.module.css';


const CartShop = () => {

    const {state , dispatch} = useContext(cartContext);
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
          <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>Check Out</button>
          <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
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
