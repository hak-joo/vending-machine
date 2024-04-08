import CommonBtn from '@/components/CommanBtn/CommonBtn.tsx';
import { NotAvailableLine } from '@/pages/VendingMachine/NotAvailableLine';
import { useContext } from 'react';
import { InsertedMoneyContext } from '@/context/InsertedMoneyContext.tsx';

export interface BeverageType {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  stock: number;
}

function Beverage({ beverage }: { beverage: BeverageType }): JSX.Element {
  const { insertedMoney } = useContext(InsertedMoneyContext);
  return (
    <div className="bg-white flex justify-center items-center flex-col">
      <div className="relative">
        <img src={beverage.imagePath} className=""></img>
        <h2>{beverage.name}</h2>
        <div>{beverage.price}원</div>
        {beverage.stock <= 0 ? <NotAvailableLine /> : null}
      </div>
      {insertedMoney >= beverage.price && beverage.stock > 0 ? (
        <CommonBtn bgColor="green"> 선택 </CommonBtn>
      ) : (
        <CommonBtn bgColor="red"> 선택불가 </CommonBtn>
      )}
    </div>
  );
}

export default Beverage;
