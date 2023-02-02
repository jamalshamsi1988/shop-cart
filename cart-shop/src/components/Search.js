import React,{useState , useEffect} from 'react';

import { getProducts } from '../services/api';
//CSS
import styles from "../components/Search.module.css";
import CartShop from './CartShop';



const Search = () => {

    const {image , title , category , description , price}=product;
    const [search , setSearch]=useState("");
    const [data , setData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
              const data=  await getProducts();
                setData(data)
        }
        fetchAPI();

    },[])

    const searchHandler = event =>{
        setSearch(event.target.value);
      }

      const searchProduct=data.filter(product => product.title.toLowerCase().includes(search.toLocaleLowerCase()));
    
  return (
    <div className={styles.container}>
      
      <input className={styles.input} type="text" placeholder='Search' value={search} onChange={searchHandler}/>

            {
                data.length ?
                <div >
                    {
                        searchProduct.map(product => <CartShop 
                            image={image} 
                             title={title} 
                              category ={category}
                               description ={description}
                                 price={price}
                        
                        />)
                    }

                </div>
                :
                <CartShop />
            }
    </div>
  )
}

export default Search;
