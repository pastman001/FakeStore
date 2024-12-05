import React from 'react';

type Props = {
  img: string;
  name: string;
  description: string;
  price: number;
  id: number;
  count: number;
};
type StoreType = {
  item: Props;
  purchases: Props[];
  setPurchases: React.Dispatch<React.SetStateAction<Props[]>>;
};

export const PurchasesCard: React.FC<StoreType> = ({ item, purchases, setPurchases }) => {
  return (
    <div key={item.id}>
      <img src={item.img} />
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>{item.count}</div>
      <button
        onClick={() => {
          const x = [...purchases];
          x[x.indexOf(item)].count++;
          setPurchases(x);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const x = [...purchases];
          x[x.indexOf(item)].count--;
          if (x[x.indexOf(item)].count <= 0) {
            x[x.indexOf(item)].count = 0;
            setPurchases(
              x.filter((i) => {
                return i.id !== x[x.indexOf(item)].id;
              })
            );
            console.log(purchases);
          } else {
            setPurchases(x);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          const x = [...purchases];
          x[x.indexOf(item)].count = 0;
          setPurchases(
            x.filter((i) => {
              return i.id !== x[x.indexOf(item)].id;
            })
          );
        }}
      >
        X
      </button>
    </div>
  );
};
