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
  const [selectedBeverages, setSelectedBeverages] = useState<BeverageType[]>(
    [],
  );

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

  const handleImageClick = (indexToRemove: number) => {
    setSelectedBeverages((prevSelectedBeverages) => {
      return prevSelectedBeverages.filter(
        (_, index) => index !== indexToRemove,
      );
    });
  };

  const handleSelectBeverage = (selectedBeverage: BeverageType) => {
    if (selectedBeverage.stock <= 0) {
      alert('해당 제품의 제고가 부족합니다.');
      return;
    }
    if (insertedMoney < selectedBeverage.price) {
      alert('금액이 부족합니다.');
      return;
    }
    selectedBeverage.stock--;
    setInsertedMoney(insertedMoney - selectedBeverage.price);
    setSelectedBeverages([...selectedBeverages, selectedBeverage]);
  };

  return (
    <>
      <div className="flex flex-col w-[700px] max-w-[1200px] min-w-[600px] h-full py-5 px-3 bg-green-700 rounded-lg">
        <div className="basis-1/3 bg-beige rounded-lg">
          <div className="grid grid-cols-6 gap-2 p-2 justify-items-center">
            {beverageList.map((beverage) => (
              <Beverage
                key={beverage.id}
                beverage={beverage}
                onSelectBeverage={handleSelectBeverage}
              />
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
        <div className="basis-1/3 bg-lime-300 p-2 relative">
          <div
            className="box-border bg-gray-300 p-2 absolute bottom-2 flex flex-row rounded-lg"
            style={{ width: '50%', height: '50%' }}
          >
            {selectedBeverages.map((beverage, index) => (
              <img
                key={index}
                src={beverage.imagePath}
                className="w-full h-full object-contain rotate-90"
                onClick={() => handleImageClick(index)}
              ></img>
            ))}
          </div>
          <div
            className="box-border bg-gray-300 p-2 absolute right-8 rounded-lg"
            style={{ width: '20%', height: '30%' }}
          ></div>
        </div>
      </div>
      <div className="p-12 rounded-lg">
        <p className="bg-beige text-2xl font-bold">
          현재 보유한 금액: {user.money}
        </p>
      </div>
    </>
  );
}

export default VendingMachine;
