import React,{useContext} from 'react';

//component
import Product from './shared/Product';
//context
import {ProductsContext} from "../contex/ProductsContexProvider";


const Store = () => {
    const products=useContext(ProductsContext);
  return (
    <div>
        {
      products.map(item => <Product key={item.id} productData={item} />)
}
    </div>
  );
}

export default Store
