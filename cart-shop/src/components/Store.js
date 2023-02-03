import React,{useContext,useState,useEffect} from 'react';
import { getProducts } from '../services/api';

//component
import Product from './shared/Product';
import Cart from './shared/Cart';
//context
import {ProductsContext} from "../contex/ProductsContexProvider";
//css 
import styles from '../components/Store.module.css';




const Store = ({props}) => {
 
    const products=useContext(ProductsContext);
    const [search , setSearch]=useState("");
    const[productsData,setProductsData]=useState([]);
  
    useEffect(()=>{
      const fetchAPI=async ()=>{
        const data = await getProducts();
        setProductsData(data);
      }
      fetchAPI();
    },[]);
  
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
      <div>
        {searchProduct.map(product=><Cart
         key={product.id} 
         title={product.title}
         category={product.category} 
         description={product.description}
         price={product.price}
         
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
