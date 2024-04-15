import CommonBtn from '@/components/CommanBtn/CommonBtn';
import MoneyBtnList from '@/components/MoneyBtnList/MoneyBtnList';
import { useCountingNumber } from '@/hooks/useCountNumber';
import { refundBtnClassName } from './datas';

interface MoneySlotAreaType {
  insertedMoney: number;
  onRefundMoney: () => void;
  onIncreaseMoney: (money: number) => void;
}

function MoneySlotArea({
  insertedMoney,
  onRefundMoney,
  onIncreaseMoney,
}: MoneySlotAreaType) {
  const insertedCountingMoney = useCountingNumber(insertedMoney);
  return (
    <div className="flex flex-row bg-lime-300 p-2 rounded-lg">
      <div className="flex flex-row mt-9">
        <div className="w-80 h-16 text-green-200 text-4xl font-bold bg-gray-700 border-4 border-gray-800 rounded-lg p-2 text-right">
          \{insertedCountingMoney}
        </div>
        <CommonBtn {...refundBtnClassName} onClick={onRefundMoney}>
          <img src="src/assets/refund.png" width={50} height={50} />
        </CommonBtn>
      </div>

      <div className="grid grid-cols-2 gap-2 p-2 justify-items-center align-middle">
        <MoneyBtnList checkUserMoney={true} onIncreaseMoney={onIncreaseMoney} />
      </div>
    </div>
  );
}

export default MoneySlotArea;
