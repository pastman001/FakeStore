import React from 'react';
import { Link } from 'react-router-dom';

type Obj = {
  img: string;
  name: string;
  description: string;
  price: number;
  id: number;
  count: number;
};

type Props = {
  purchases: Obj[];
};

export const Navigation: React.FC<Props> = ({ purchases }) => {
  return (
    <>
      <header className="mainHeader">
        <Link className="" to="/">
          Fake store
        </Link>
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/products">
          Products
        </Link>
        <Link className="" to="/contacts">
          Contacts
        </Link>
        <Link className="" to="/bag">
          <div className="purchsesClass">
            <div className="purchesesCount">{purchases.length !== 0 && purchases.length}</div>
          </div>
        </Link>
      </header>
    </>
  );
};
