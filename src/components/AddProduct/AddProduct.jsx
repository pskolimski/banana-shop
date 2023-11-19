import Button from 'components/Button/Button';
import React, { useState } from 'react';
import styles from './AddProduct.module.scss';

const AddProduct = ({ productsList, setProductsList }) => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [photo, setPhoto] = useState(null);
   const [price, setPrice] = useState(0);
   const [amount, setAmount] = useState(0);
   const [unit, setUnit] = useState('kg');
   const [error, setError] = useState(null);

   const handleSubmit = () => {
      if (!name || !description || !photo || !price || !amount || !unit) {
         setError('Wypełnij wszystkie pola formularza!');
         return;
      }

      const newProduct = {
         name,
         id: productsList.length + 1,
         img: URL.createObjectURL(photo),
         quantity: amount,
         description,
         price,
         unit,
      };

      setProductsList([...productsList, newProduct]);
      setError(null);

      // Reset form
      setName('');
      setDescription('');
      setPhoto(null);
      setPrice(0);
      setAmount(0);
      setUnit('kg');
   };

   return (
      <div className={styles.wrapper}>
         <h2 className={styles.title}>
            Dodaj <span>nowy produkt</span>
         </h2>
         <p>
            Skorzystaj w funkcji dodawania nowego produktu jeśli brakuje Ci
            czegoś w naszym asortymencie!
         </p>

         <div className={styles.form}>
            <div className={styles.inputsWrapper}>
               <div className={styles.formField}>
                  <label className={styles.label} htmlFor="productName">
                     Nazwa produktu
                  </label>
                  <input
                     className={styles.input}
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Banan"
                     maxLength={15}
                     id="productName"
                  />
               </div>
               <div className={styles.formField}>
                  <label className={styles.label} htmlFor="productPhoto">
                     Zdjęcie produktu
                  </label>
                  <input
                     className={styles.input}
                     accept="image/*"
                     type="file"
                     onChange={(e) => setPhoto(e.target.files[0])}
                     id="productPhoto"
                  />
               </div>
            </div>

            <div className={styles.inputsWrapper}>
               <div className={styles.formField}>
                  <label className={styles.label} htmlFor="productPrice">
                     Cena produktu
                  </label>
                  <input
                     className={styles.input}
                     type="number"
                     placeholder="Cena twojego produktu"
                     id="productPrice"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                  />
               </div>
               <div className={styles.formField}>
                  <label className={styles.label} htmlFor="productAmount">
                     Ilość produktu
                  </label>
                  <input
                     className={styles.input}
                     type="number"
                     placeholder="Ilość twojego produktu"
                     id="productAmount"
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                  />
               </div>
               <div className={styles.formField}>
                  <label className={styles.label} htmlFor="productUnit">
                     Jednostka
                  </label>
                  <select
                     className={styles.input}
                     id="productUnit"
                     name="productUnit"
                     value={unit}
                     onChange={(e) => setUnit(e.target.value)}
                  >
                     <option value="kg">kg</option>
                     <option value="szt">szt</option>
                     <option value="l">l</option>
                     <option value="ml">ml</option>
                  </select>
               </div>
            </div>
            <div className={styles.formField}>
               <label className={styles.label} htmlFor="productDescription">
                  Opis produktu
               </label>
               <textarea
                  type="file"
                  placeholder="Opis twojego produktu"
                  id="productDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`${styles.input} ${styles.textarea}`}
                  maxLength={200}
               />
            </div>
            <p className={styles.error}>{error}</p>
            <Button onClick={handleSubmit}>Dodaj produkt do listy</Button>
         </div>
      </div>
   );
};

export default AddProduct;
