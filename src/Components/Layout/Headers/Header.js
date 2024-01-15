import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="path/to/your/logo.png" alt="Logo" />
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search products..." />
        <button type="button">Search</button>
      </div>
      <div className={styles.cartIcon}>
        <span role="img" aria-label="Shopping Cart">
          🛒
        </span>
        <div className={styles.cartCount}>3</div>
      </div>
    </div>
  );
};

export default Header;