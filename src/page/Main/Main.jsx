import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <>
      <div className={styles.section}>
        <h2>상품 리스트</h2>
          <ul className={styles.productList}>
          {products.map((product, index) => (
            <li key={product.id} className={styles.productItem}>
              <img src={product.image_url} alt={product.title} className={styles.productImage} />
              <p className={styles.productTitle}>{product.title}</p>
            </li>
          ))}
        </ul> 
      </div>
  
      <div className={styles.section}>
        <h2>북마크 리스트</h2>
        
      </div>
    </>
  );
}

export default Main;
