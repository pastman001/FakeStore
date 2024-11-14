import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts';
import { Copyright } from './Copyright';
import { Main } from './Main';
import { Navigation } from './Navigation';
import { Products } from './Products';
import './style.css';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/3" element={<Main />}></Route>
      </Routes>
      <Copyright />
    </>
  );
};
