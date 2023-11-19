import React from 'react';
import styles from './ContentTemplate.module.scss';

const ContentTemplate = ({ children }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default ContentTemplate;
