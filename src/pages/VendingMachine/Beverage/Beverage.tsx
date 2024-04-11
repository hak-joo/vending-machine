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

  return (
    <div className="flex justify-center items-center flex-col my-4">
      <div className="relative flex justify-center items-center flex-col">
        <img src={beverage.imagePath} className=""></img>
        <h2>{beverage.name}</h2>
        {beverage.stock <= 0 ? <NotAvailableLine /> : null}
      </div>
      <CommonBtn
        bgColor="black"
        additionalClass="rounded-full text-white"
        onClick={() => onSelectBeverage(beverage)}
      >
        {insertedMoney >= beverage.price && beverage.stock > 0 ? (
          <div className="inline-block w-4 h-4 rounded-full border-green-500 bg-green-500 mr-2" />
        ) : (
          <div className="inline-block w-4 h-4 rounded-full border-red-500 bg-red-500 mr-2" />
        )}
        {beverage.price}원
      </CommonBtn>
    </div>
  );
}

export default Beverage;
