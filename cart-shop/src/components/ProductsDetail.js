import { Link } from "react-router-dom";
import React,{useContext} from 'react';

import { ProductsContext } from "../contex/ProductsContexProvider";
const ProductsDetail = (props) => {

    const id=props.match.params.id;
    const data=useContext(ProductsContext);
    const product=data[id - 1];
    

  return (
    <div>
      
    </div>
  )
}

export default ProductsDetail;
