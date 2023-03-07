import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector  } from 'react-redux';
//components
import SignUp from '../SignUp';

//context
// import { cartContext } from '../../contex/CartContextProvider';

//icons
import shopIcon from '../../assets/Icons/shop.svg';
//css
import styles from '../shared/Navbar.module.css';


const Navbar = () => {

    // const {state} = useContext(cartContext);
    const state = useSelector(state => state.cartState)
    
  return (
    <div className={styles.mainContainer}>
      
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">Products</Link>
        <Link   className={styles.productLink}to="/login">Login</Link>
        <Link className={styles.productLink} to="/signup">SignUp</Link>
        <Link  className={styles.productLink}to="/aboutus">About Us</Link>
        </div>
           <div className={styles.iconContainer}>
        <Link to="/cart"><img src={shopIcon} alt="shop"/></Link>
        <span>{state.itemsCounter}</span>
      </div>
      
    </div>
  )
}

export default Navbar
