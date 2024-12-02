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
  purchases: Props[];
  setPurchases: React.Dispatch<React.SetStateAction<Props[]>>;
};
export const Bag: React.FC<StoreType> = ({ purchases, setPurchases }) => {
  let result = 0;
  for (let i = 0; i < purchases.length; i++) {
    result += purchases[i].count * purchases[i].price;
  }

  return (
    <div>
      {purchases.map((item) => {
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
          </div>
        );
      })}
      <div>total price: {result.toFixed(2)}</div>
      <div>
        {purchases.reduce((acc, item) => {
          return acc + item.count * item.price;
        }, 0)}
      </div>
    </div>
  );
};
