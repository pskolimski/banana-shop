import React, { useEffect, useRef } from 'react';
import styles from './Product.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Product = ({ product, onClick }) => {
   const wrapperRef = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const appear = gsap.fromTo(
         wrapperRef.current,
         { autoAlpha: 0, y: '-=30' },
         { autoAlpha: 1, y: 0, duration: 1 },
      );
      ScrollTrigger.create({
         trigger: wrapperRef.current,
         start: 'top center',
         end: '+=500',
         animation: appear,
      });
   }, []);

   return (
      <div className={styles.wrapper} ref={wrapperRef}>
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
