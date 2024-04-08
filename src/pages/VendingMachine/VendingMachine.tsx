import Beverage from '@/pages/VendingMachine/Beverage/Beverage';
import { BeverageType } from '@/pages/VendingMachine/Beverage/Beverage';
import BeverageAPI from '@/util/BeverageApi';
import { useContext, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import { InsertedMoneyContext } from '@/context/InsertedMoneyContext';
import MoneySlotArea from './MoneySlotArea/MoneySlotArea';

function VendingMachine() {
  const [beverageList, setBeverageList] = useState<BeverageType[]>([]);
  const { insertedMoney, increaseInsertedMoney, resetInsertedMoney } =
    useContext(InsertedMoneyContext);
  const [user, setUser] = useAtom(userAtom);

  const fetch = () => {
    const beverageList = BeverageAPI.fetchBeverageList();
    setBeverageList(beverageList);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleRefundMoney = () => {
    setUser({
      ...user,
      money: user.money + insertedMoney,
    });
    resetInsertedMoney();
  };

  const handleIncreaseMoney = (money: number) => {
    increaseInsertedMoney(money);
    setUser({
      ...user,
      money: user.money - money,
    });
  };

  return (
    <div className="flex flex-col w-[700px] max-w-[1200px] min-w-[600px] h-full py-5 px-3 bg-green-700 rounded-lg">
      <div className="basis-1/3 bg-lime-300">
        <div className="grid grid-cols-6 gap-2 p-2 justify-items-center">
          {beverageList.map((beverage) => (
            <Beverage key={beverage.id} beverage={beverage} />
          ))}
        </div>
      </div>
      <div className="w-full h-1 bg-black"></div>
      <div className="basis-1/3">
        <MoneySlotArea
          insertedMoney={insertedMoney}
          onRefundMoney={handleRefundMoney}
          onIncreaseMoney={handleIncreaseMoney}
        />
      </div>
      현재 보유한 금액 : {user.money}
      <div className="basis-1/3">
        <button>음료 나오는 곳</button>
      </div>
    </div>
  );
}

export default VendingMachine;
