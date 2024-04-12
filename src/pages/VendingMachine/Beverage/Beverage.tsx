import CommonBtn from '@/components/CommanBtn/CommonBtn.tsx';
import { NotAvailableLine } from '@/pages/VendingMachine/NotAvailableLine';
import { useAtom } from 'jotai';
import { insertedMoneyReadOnlyAtom } from '@/store/atoms';

export interface BeverageType {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  stock: number;
}

interface BeveragePropType {
  beverage: BeverageType;
  onSelectBeverage: (beverage: BeverageType) => void;
}

function Beverage({
  beverage,
  onSelectBeverage,
}: BeveragePropType): JSX.Element {
  const [insertedMoney] = useAtom(insertedMoneyReadOnlyAtom);
  const isSoldOut = beverage.stock <= 0;

  return (
    <div className="flex justify-center items-end flex-col py-4">
      <div className="relative flex justify-center items-center flex-col">
        <img
          src={beverage.imagePath}
          className={isSoldOut ? 'opacity-30' : ''}
        ></img>
        <div className=" bottom-7 absolute w-full h-1.5 shadow-[0px_-5px_15px_rgba(255,255,255,1)]" />
        <h2 className="font-extrabold w-full flex justify-center bg-blue-300 py-0.5 rounded-t-md ">
          {beverage.name}
        </h2>
        {isSoldOut ? <NotAvailableLine /> : null}
      </div>
      <div className="flex w-full justify-center bg-gray-300 py-1 shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
        <CommonBtn
          bgColor="black"
          additionalClass="w-20 h-7 rounded-lg text-white"
          onClick={() => onSelectBeverage(beverage)}
        >
          {insertedMoney >= beverage.price && beverage.stock > 0 ? (
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-red-500 mr-1" />
          )}
          {beverage.price}원
        </CommonBtn>
      </div>
    </div>
  );
}

export default Beverage;
