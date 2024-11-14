import React from 'react';
import { store } from '../store/Store';

export const Products = ({ purchases, setPurchases }) => {
  const clickHandler = (item) => {
    setPurchases(purchases.push(item));
    console.log(purchases);
  };
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
            <button
              className="buttonContainer"
              onClick={() => {
                item.count++;
                clickHandler(item);
              }}
            >
              Add to card
            </button>
          </div>
        );
      })}
    </div>
  );
};
