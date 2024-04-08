import Beverage from '@/pages/VendingMachine/Beverage/Beverage';
import { BeverageType } from './Beverage/types';
import BeverageAPI from '@/util/BeverageApi';
import { useEffect, useState } from 'react';
import ChargeMoneyBtnList from '../Charge/ChargeMoneyBtnList/ChargeMoneyBtnList';
import { InputMoney, useInputMoney } from '@/context/InputMoneyContext';

function VendingMachinePage() {
  const [beverageList, setBeverageList] = useState<BeverageType[]>([]);
  const { inputMoney, handleClick } = useInputMoney();

  const fetch = () => {
    const beverageList = BeverageAPI.fetchBeverageList();
    setBeverageList(beverageList);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleIncreaseMoney = (money: number) => {
    handleClick(money);
  };

  return (
    <InputMoney>
      <div className="flex flex-col p-64">
        <div className="basis-1/3 bg-lime-300">
          <div className="grid grid-cols-6 gap-2 p-2 justify-items-center">
            {beverageList.map((beverage) => (
              <Beverage
                key={beverage.id}
                beverage={beverage}
                inputMoney={inputMoney}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-1 bg-black"></div>
        <div className="basis-1/3">
          <div className="flex flex-col bg-lime-300 p-2">
            <div className="">
              <div className="text-lime-700 text-4xl font-bold bg-lime-300 border-4 border-lime-700 rounded-lg p-2 text-right">
                넣은 돈: {inputMoney}
              </div>
            </div>
            <div className="flex flex-row p-2 justify-end">
              <ChargeMoneyBtnList onIncreaseMoney={handleIncreaseMoney} />
            </div>
          </div>
        </div>

        <div className="basis-1/3">
          <button>음료 나오는 곳</button>
        </div>
      </div>
    </InputMoney>
  );
}

export default VendingMachinePage;
