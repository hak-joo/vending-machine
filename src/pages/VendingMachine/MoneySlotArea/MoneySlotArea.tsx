import CommonBtn from '@/components/CommanBtn/CommonBtn';
import MoneyBtnList from '@/components/MoneyBtnList/MoneyBtnList';

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
  return (
    <div className="flex flex-col bg-lime-300 p-2">
      <div className="text-green-200 text-4xl font-bold bg-gray-700 border-4 border-gray-800 rounded-lg p-2 text-right">
        \{insertedMoney}
      </div>
      <div className="my-3">
        <CommonBtn
          additionalClass="w-14 h-14 align-middle mr-64"
          onClick={onRefundMoney}
        >
          <img src="src/assets/refund.png" width={50} height={50} />
        </CommonBtn>
        <MoneyBtnList checkUserMoney={true} onIncreaseMoney={onIncreaseMoney} />
      </div>
    </div>
  );
}

export default MoneySlotArea;
