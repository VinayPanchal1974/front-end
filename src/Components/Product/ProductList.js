import React, { useEffect, useState } from 'react';
import styles from "./ProductList.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { productApi } from '../../Api/Api';
import { Image } from 'react-bootstrap';

const ProductList = () => {
  const [list, setList] = useState([])

  async function getProducts() {
    const response = await productApi()
    setList(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={styles.productListContainer}>
      {list.map((product) => (

        <div key={product._id} className={styles.productItem} >
          <Link to={"/singleProduct/" + product._id}>
            <Image src={product.productImage}/>
          </Link>
          <h3>{product.productName}</h3>
          <p>{product.productPrice}</p>

        </div>

      ))}
    </div>
  );
};

export default ProductList
