import Beverage from '@/pages/VendingMachine/Beverage/Beverage';
import { BeverageType } from './Beverage/types';
import BeverageAPI from '@/util/BeverageApi';
import { useEffect, useState } from 'react';

function VendingMachinePage() {
  const [beverageList, setBeverageList] = useState<BeverageType[]>([]);

  const fetch = () => {
    const beverageList = BeverageAPI.fetchBeverageList();
    setBeverageList(beverageList);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-col max-w-[1200px] min-w-[600px]">
      <div className="basis-1/3 bg-lime-300">
        <div className="grid grid-cols-6 gap-2 p-2 justify-items-center">
          {beverageList.map((beverage) => (
            <Beverage beverage={beverage} />
          ))}
        </div>
      </div>

      <div className="basis-1/3">
        <button>버튼</button>
      </div>

      <div className="basis-1/3">
        <button>음료 나오는 곳</button>
      </div>
    </div>
  );
}

export default VendingMachinePage;
