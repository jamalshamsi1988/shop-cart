import { Link,useParams } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';

//context
import { ProductsContext } from "../contex/ProductsContexProvider";
//css
import styles from '../components/ProductsDetail.module.css';

const ProductsDetail = (props) => {
     const params=useParams();
    const id=params.id;
    // const data=useContext(ProductsContext);
    const data=useSelector(state => state.productsState.products);
    const product=data[id - 1];
    const {image , title , category , description , price}=product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product"/>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}><span>Category:</span> {category}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
