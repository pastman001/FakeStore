import React from 'react';
import { PurchasesCard } from './PurchasesCard';
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
  const cost = purchases.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);
  return (
    <div>
      {purchases.map((item) => {
        return (
          <PurchasesCard
            key={item.id}
            item={item}
            purchases={purchases}
            setPurchases={setPurchases}
          />
        );
      })}
      <div>total price: {cost.toFixed(2)}</div>
    </div>
  );
};
