import React from 'react';

export const Bag = ({ purchases, setPurchases }) => {
  return (
    <div>
      {purchases.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} />
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.count}</div>
            <button onClick={() => {}}>+</button>
            <button onClick={() => {}}>-</button>
          </div>
        );
      })}
    </div>
  );
};
