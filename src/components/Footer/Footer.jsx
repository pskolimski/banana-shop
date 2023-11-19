import React from 'react';
import styles from './Footer.module.scss';
import authorLogo from 'assets/authorLogo.svg';
import logo from 'assets/logo.svg';

const Footer = () => {
   return (
      <div className={styles.wrapper}>
         <img src={logo} alt="Banana Shop Logo" className={styles.logo} />
         <p className={styles.paragraph}>
            Banana Shop nie jest prawdziwą działalnością gospodarczą i istnieje
            tylko na potrzeby projektu.
         </p>
         <p className={styles.author}>
            <span>Stworzone przez</span>
            <a href="https://revku.dev/" target="_blank" rel="noreferrer">
               <img
                  src={authorLogo}
                  alt="Revku.dev Logo"
                  className={styles.authorLogo}
               />
            </a>
         </p>
      </div>
   );
};

export default Footer;
