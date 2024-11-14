import React from 'react';
import { store } from '../store/Store';

export const Products = () => {
  return (
    <div className="mainContainer">
      {store.map((item) => {
        return (
          <div key={item.id} className="container">
            <div>
              <img src={item.img} />
            </div>
            <div className="nameContainer">{item.name}</div>
            <div>price: ${item.price}</div>
            <button className="buttonContainer">Add to card</button>
          </div>
        );
      })}
    </div>
  );
};
