import React ,{ useContext }from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../contex/CartContextProvider';
//icons
import shopIcon from '../../assets/Icons/shop.svg';
//css
import styles from '../shared/Navbar.module.css';

const Navbar = () => {

    const {state} = useContext(cartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">Products</Link>
      <div className={styles.iconContainer}>
        <Link to="/cart"><img src={shopIcon} alt="shop"/></Link>
        <span>{state.itemsCounter}</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar
