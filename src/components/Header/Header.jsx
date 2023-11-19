import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as HeroImage } from 'assets/heroimage.svg';
import logo from 'assets/logo.svg';
import Button from 'components/Button/Button';
import { gsap } from 'gsap';

const Header = () => {
   const imageRef = useRef(null);

   useEffect(() => {
      const tl = gsap.timeline();

      const image = imageRef.current;

      const bottom = image.getElementById('bottom');
      const orange1 = image.getElementById('orange1');
      const orange2 = image.getElementById('orange2');
      const water = image.getElementById('water');

      gsap.set([bottom, orange1, orange2, water], { autoAlpha: 0 });

      tl.fromTo(
         bottom,
         { y: '-=100' },
         { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
      )
         .fromTo(orange2, { x: '-=30' }, { x: 0, autoAlpha: 1, duration: 0.7 })
         .fromTo(orange1, { y: '-=30' }, { y: 0, autoAlpha: 1, duration: 0.7 })
         .fromTo(water, { x: '+=30' }, { x: 0, autoAlpha: 1, duration: 0.7 });
   }, []);

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
               <HeroImage ref={imageRef} className={styles.heroImage} />
            </div>
         </div>
      </div>
   );
};

export default Header;
