import { Link,useParams } from "react-router-dom";
import React,{useContext} from 'react';

//context
import { ProductsContext } from "../contex/ProductsContexProvider";

const ProductsDetail = (props) => {
     const params=useParams();
    const id=params.id;
    const data=useContext(ProductsContext);
    const product=data[id - 1];
    const {image , title , category , description , price}=product;

  return (
    <div>
      <img src={image} alt="product"/>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>Category:</span> {category}</p>
        <div>
          <span>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
