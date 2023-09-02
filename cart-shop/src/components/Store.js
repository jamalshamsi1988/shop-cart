import React,{useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';

//component
import Product from './shared/Product';

//context
// import {ProductsContext} from "../contex/ProductsContexProvider";
//css 
import styles from '../components/Store.module.css';

import { fetchProducts } from '../redux/products/productAction';
import Loader from './Loader';




const Store = () => {
 const dispatch=useDispatch();
 const productState=useSelector(state => state.productsState);

 useEffect(()=>{
 if(!productState.products.length) dispatch(fetchProducts());
 },[])


  //   const products=useContext(ProductsContext);
  //   const [search , setSearch]=useState("");
  //   const[productsData,setProductsData]=useState([]);
  
  //   useEffect(()=>
  //   setProductsData(products),
  //   [products]);
  // const searchHandeler= event=>{
  //      setSearch(event.target.value);
  // }
   
  // const searchProduct=productsData.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className={styles.container}>

    {
      productState.loadin ?
      <Loader /> :
      productState.error ?
      <p>Something went wrong </p> :
      productState.products.map(product => <Product 

       
      />)
    }



    {/* <div className={styles.inputContainer}>
    <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchHandeler} />
    </div> */}
    {/* { search ?
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
} */}
    </div>
  );
}

export default Store
