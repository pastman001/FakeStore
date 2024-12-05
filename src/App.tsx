import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Bag } from './Bag';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';
import { Main } from './Main';
import { Navigation } from './Navigation';
import { Products } from './Products';
import './style.css';

type Test = {
  img: string;
  name: string;
  description: string;
  price: number;
  id: number;
  count: number;
};
export const App = () => {
  const [purchases, setPurchases] = useState<Test[]>([]);
  return (
    <>
      <Navigation purchases={purchases} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route
          path="/products"
          element={<Products purchases={purchases} setPurchases={setPurchases} />}
        ></Route>
        <Route
          path="/bag"
          element={<Bag purchases={purchases} setPurchases={setPurchases} />}
        ></Route>
      </Routes>
      <Copyright />
    </>
  );
};
