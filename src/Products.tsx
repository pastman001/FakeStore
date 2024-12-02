import React from 'react';
import { store } from '../store/Store';

type PurchasesType = {
  img: string;
  name: string;
  description: string;
  price: number;
  id: number;
  count: number;
};
type Props = {
  purchases: PurchasesType[];
  setPurchases: React.Dispatch<React.SetStateAction<PurchasesType[]>>;
};

export const Products: React.FC<Props> = ({ purchases, setPurchases }) => {
  const clickHandler = (item: PurchasesType) => {
    if (item.count === 0) {
      setPurchases([...purchases, item]);
      item.count++;
      console.log(purchases);
    } else {
      item.count++;
    }
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
