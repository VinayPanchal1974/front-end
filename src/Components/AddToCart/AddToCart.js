import React, { useState } from 'react';
import styles from "./AddToCart.module.css"

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} items to the cart`);
  };

  return (
    <div className={styles.addToCartContainer}>
      <h2>Product Title</h2>
      <p>Product Description goes here...</p>
      <div className={styles.quantitySelector}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;