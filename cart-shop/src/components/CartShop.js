import React , {useContext} from 'react';

//cotext
import { cartContext } from '../contex/CartContextProvider';


const CartShop = () => {

    const {state} = useContext(cartContext);
  return (
    <div>
      Cartshop
    </div>
  )
}

export default CartShop
