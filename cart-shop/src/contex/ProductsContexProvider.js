import React ,{useState,useEffect,createContext} from "react";
import { getProducts } from "../services/api"; 

const ProductsContext=createContext();

const  ProductsContexProvider=  (props) => {

        const [products , setProducts]=useState([]);

        useEffect (()=>{

            const fetchAPI= async ()=>{
              setProducts(await(getProducts()))  
            }

            fetchAPI();

        },[]);



    return(
    <ProductsContext.Provider value={products}>
        {props.children}
    </ProductsContext.Provider>
    );
}
 
export default ProductsContexProvider;
