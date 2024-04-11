import Beverage from '@/pages/VendingMachine/Beverage/Beverage';
import { BeverageType } from '@/pages/VendingMachine/Beverage/Beverage';
import BeverageAPI from '@/util/BeverageApi';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { insertedMoneyAtom, userAtom } from '@/store/atoms';
import MoneySlotArea from './MoneySlotArea/MoneySlotArea';

function VendingMachine() {
  const [beverageList, setBeverageList] = useState<BeverageType[]>([]);
  const [insertedMoney, setInsertedMoney] = useAtom(insertedMoneyAtom);
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
    setInsertedMoney(0);
  };

  const handleIncreaseMoney = (money: number) => {
    setInsertedMoney(insertedMoney + money);
    setUser({
      ...user,
      money: user.money - money,
    });
  };

  return (
    <div className="flex flex-col w-[700px] max-w-[1200px] min-w-[600px] h-full py-5 px-3 bg-green-700 rounded-lg">
      <div className="w-11/12 h-2 self-center shadow-[0px_14px_8px_rgba(255,255,255,1)] z-10 rounded-lg" />
      <div className="basis-1/3 bg-gray-200 rounded-lg">
        <div className="grid grid-cols-6 px-3">
          {beverageList.map((beverage) => (
            <Beverage key={beverage.id} {...beverage} />
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
