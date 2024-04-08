import CommonBtn from '@/components/CommanBtn/CommonBtn.tsx';
import { BeverageType } from './types.ts';
import { NotAvailableLine } from '@/components/NotAvailableLine.tsx';
import { useContext } from 'react';
import { inputMoneyContext } from '@/context/InputMoneyContext.tsx';

function Beverage({ beverage }: { beverage: BeverageType }): JSX.Element {
  const { inputMoney } = useContext(inputMoneyContext);
  return (
    <div className="bg-white flex justify-center items-center flex-col">
      <div className="relative">
        <img src={beverage.imagePath} className=""></img>
        <h2>{beverage.name}</h2>
        <div>{beverage.price}원</div>
        {beverage.stock <= 0 ? <NotAvailableLine /> : null}
      </div>
      {inputMoney >= beverage.price && beverage.stock > 0 ? (
        <CommonBtn bgColor="green"> 선택 </CommonBtn>
      ) : (
        <CommonBtn bgColor="red"> 선택불가 </CommonBtn>
      )}
    </div>
  );
}

export default Beverage;
