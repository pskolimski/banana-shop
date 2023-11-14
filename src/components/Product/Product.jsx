import React from 'react';
import styles from './Product.module.scss';

const Product = ({ product, onClick }) => {
   return (
      <div className={styles.wrapper}>
         <img src={product.img} alt={product.name} className={styles.image} />
         <div className={styles.header}>
            <div>
               <h2 className={styles.title}>{product.name}</h2>
               <p
                  className={`${styles.quantity} ${
                     product.quantity > 0
                        ? styles.isAvailable
                        : styles.notAvailable
                  }`}
               >
                  {product.quantity > 0
                     ? `${product.quantity} sztuk na stanie`
                     : `Brak w magazynie`}
               </p>
            </div>
            <div className={styles.price}>
               {product.price} zł / {product.unit}
            </div>
         </div>

         <div>
            <label className={styles.label}>Opis</label>
            <p>{product.description}</p>
         </div>

         <button className={styles.button} onClick={onClick}>
            Usuń produkt
         </button>
      </div>
   );
};

export default Product;
