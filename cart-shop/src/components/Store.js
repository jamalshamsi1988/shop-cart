import React,{useContext,useState,useEffect} from 'react';
//component
import Product from './shared/Product';

//context
import {ProductsContext} from "../contex/ProductsContexProvider";
//css 
import styles from '../components/Store.module.css';




const Store = () => {
 
    const products=useContext(ProductsContext);
    const [search , setSearch]=useState("");
    const[productsData,setProductsData]=useState([]);
  
    useEffect(()=>setProductsData(products),[products]);
  const searchHandeler= event=>{
       setSearch(event.target.value);
  }
   
  const searchProduct=productsData.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
    <div className={styles.inputContainer}>
    <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchHandeler} />
    </div>
    { search ?
      <div className={styles.container}>
        {searchProduct.map(product=><Product
         key={product.id} 
         productData={product}
         
         />)}
      </div>
    :
    <div className={styles.container}>
        {
      products.map(item => <Product key={item.id} productData={item} />)
}
    </div>
}
    </>
  );
}

export default Store
