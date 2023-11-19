import React, { useState } from 'react';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import ContentTemplate from 'templates/ContentTemplate/ContentTemplates';

import { products } from 'helpers/products';
import AddProduct from 'components/AddProduct/AddProduct';

const App = () => {
   const [productsList, setProductsList] = useState(products);

   return (
      <>
         <Header />

         <ContentTemplate>
            <Main
               productsList={productsList}
               setProductsList={setProductsList}
            />
            <AddProduct
               productsList={productsList}
               setProductsList={setProductsList}
            />
         </ContentTemplate>
      </>
   );
};

export default App;
