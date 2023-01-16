import React,{useContext} from 'react';


//component
import Product from './shared/Product';
//context
import {ProductsContext} from "../contex/ProductsContexProvider";
//css 
import styles from './shared/Store.module.css';



const Store = () => {
    const products=useContext(ProductsContext);
  return (
    <div className={styles.container}>
        {
      products.map(item => <Product key={item.id} productData={item} />)
}
    </div>
  );
}

export default Store
