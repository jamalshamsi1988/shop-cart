import React , {useContext} from 'react';

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
    </div>
  )
}

export default CartShop
