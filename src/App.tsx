import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Bag } from './Bag';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';
import { Main } from './Main';
import { Navigation } from './Navigation';
import { Products } from './Products';
import './style.css';

export const App = () => {
  const [purchases, setPurchases] = useState([]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/products" element={<Products purchases={purchases} setPurchases={setPurchases} />}></Route>
        <Route path="/bag" element={<Bag purchases={purchases} setPurchases={setPurchases} />}></Route>
      </Routes>
      <Copyright />
    </>
  );
};
