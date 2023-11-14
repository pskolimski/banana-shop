import React from 'react';
import styles from './Header.module.scss';
import heroImage from 'assets/heroimage.svg';
import logo from 'assets/logo.svg';
import Button from 'components/Button/Button';

const Header = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.navbar}>
            <img src={logo} alt="Logo" className={styles.logo} />
         </div>

         <div className={styles.hero}>
            <div className={styles.content}>
               <div>
                  <h1 className={styles.title}>Witaj w Banana Shop!</h1>
                  <p className={styles.subtitle}>
                     Kupisz tutaj najświeższe warzywa i owoce jakie są dostępne
                     na rynku!
                  </p>
               </div>

               <Button onClick={() => (location.href = './#products')}>
                  Przeglądaj produkty
               </Button>
            </div>
            <div>
               <img
                  src={heroImage}
                  alt="Hero image"
                  className={styles.heroImage}
               />
            </div>
         </div>
      </div>
   );
};

export default Header;
