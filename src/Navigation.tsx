import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <header className="mainHeader">
        <Link className="" to="/">
          Fake store
        </Link>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/">Kop3uHKA</Link>
      </header>
    </>
  );
};
