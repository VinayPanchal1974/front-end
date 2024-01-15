import React, { useEffect, useState } from 'react';
import styles from "./SingleProduct.module.css"
import { singleProductApi } from '../../Api/Api';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const {id} = useParams()


  const getSingleProduct = async () => {
    const res = await singleProductApi(id)
    console.log(res);
    setProduct(res.data)
    
  }
  useEffect(() => {
    getSingleProduct()
  }, [])
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img src={product.productImage} width={200} height={200} />
      </div>
      <div className={styles.productDetails}>
        <h2>{product.productName}</h2>
        <p className={styles.productBrand}>Brand: {product.productBrand}</p>
        <p className={styles.productPrice}>${product.productPrice}</p>
        <p className={styles.productDescription}>
         {product.productDescription}
        </p>
        <button className={styles.addtoCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;