import React from 'react';
import styles from "./CartSubtotal.module.css"
const CartSubtotal = () => {
  return (
    <div className={styles.cartSubtotalContainer}>
      <div className={styles.subtotalDetails}>
        <h2>Cart Subtotal</h2>
        <p>Total Price: $99.99</p>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.proceedToBuyBtn}>Proceed to Buy</button>
        <button className={styles.goToCartBtn}>Go to Cart</button>
      </div>
    </div>
  );
};

export default CartSubtotal;