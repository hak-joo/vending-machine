import Beverage from '@/pages/VendingMachine/Beverage/Beverage';
import { BeverageType } from '@/pages/VendingMachine/Beverage/Beverage';
import BeverageAPI from '@/util/BeverageApi';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { insertedMoneyAtom, userAtom } from '@/store/atoms';
import MoneySlotArea from './MoneySlotArea/MoneySlotArea';
import Wallet from './Wallet/Wallet';

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
    if (selectedBeverages.length >= 5) {
      alert('음료수를 먼저 받아주세요.');
      return;
    }
    selectedBeverage.stock--;
    setInsertedMoney(insertedMoney - selectedBeverage.price);
    setSelectedBeverages([...selectedBeverages, selectedBeverage]);
  };

  return (
    <div className="flex justify-around w-full min-w-[1280px] lg:my-auto">
      <div className="flex flex-col justify-around w-[700px] min-w-[700px] h-full py-5 px-3 bg-green-700 rounded-lg gap-10 max-h-[1080px]">
        <div className="basis-7/12 flex bg-gray-100 rounded-lg">
          <div className="grid grid-cols-6 px-3 lg:py-5">
            {beverageList.map((beverage) => (
              <Beverage
                key={beverage.id}
                beverage={beverage}
                onSelectBeverage={handleSelectBeverage}
              />
            ))}
          </div>
        </div>

        <MoneySlotArea
          insertedMoney={insertedMoney}
          onRefundMoney={handleRefundMoney}
          onIncreaseMoney={handleIncreaseMoney}
        />

        <div className="w-full min-h-[120px] box-border bg-green-800 flex flex-row rounded-lg">
          {selectedBeverages.map((beverage, index) => (
            <img
              key={index}
              src={beverage.imagePath}
              className="object-contain rotate-90 w-32 animate-fade"
              onClick={() => handleImageClick(index)}
            ></img>
          ))}
        </div>
      </div>
      <Wallet />
    </div>
  );
}

export default VendingMachine;
