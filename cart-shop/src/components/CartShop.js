import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';
//cotext
import { cartContext } from '../contex/CartContextProvider';


const CartShop = () => {

    const {state , dispatch} = useContext(cartContext);
  return (
    <div>
     <div>
        {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
     </div>
     {
      state.itemsCounter > 0 && <div>
        <p><span>Total Items :</span>{state.itemsCounter}</p>
        <p><span>Total Payment :</span>{state.total}</p>
        <div>
          <button onClick={()=> dispatch({type:"CHECKOUT"})}>Check Out</button>
          <button onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
        </div>
      </div>

     }

     {
      state.checkOut && <div>
        <h3>Check Out Sucsessfully</h3>
        <Link to="/products">Buy More</Link>
      </div>
     }

     {
       !state.checkOut && state.itemsCounter === 0 && <div>
       <h3>Want to Buy More?</h3>
       <Link to="/products">Go back to shop</Link>
     </div>
     }
    </div>
  )
}

export default CartShop
