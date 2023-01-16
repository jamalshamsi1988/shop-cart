import React ,{ useContext }from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../contex/CartContextProvider';
//icons
import shopIcon from '../../assets/Icons/shop.svg';
const Navbar = () => {

    const {state} = useContext(cartContext);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/cart"><img src={shopIcon} alt="shop"/></Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  )
}

export default Navbar
