import React from 'react';
import styles from './Main.module.scss';
import Product from 'components/Product/Product';

const Main = ({ productsList, setProductsList }) => {
   const deleteProduct = (idx) => {
      const newItems = productsList.filter((el, index) => index !== idx);
      setProductsList(newItems);
   };

   return (
      <div className={styles.wrapper} id="products">
         <h2 className={styles.title}>
            Nasze <span>produkty</span>
         </h2>
         <p>Każdy znajdzie coś dla siebie z naszego asortymentu!</p>

         <div className={styles.items}>
            {productsList.map((product, index) => (
               <Product
                  product={product}
                  key={index}
                  onClick={() => deleteProduct(index)}
               />
            ))}
         </div>
      </div>
   );
};

export default Main;
