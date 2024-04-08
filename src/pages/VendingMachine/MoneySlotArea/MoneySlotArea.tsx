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
      <div className="">
        <div className="text-lime-700 text-4xl font-bold bg-lime-300 border-4 border-lime-700 rounded-lg p-2 text-right">
          넣은 돈: {insertedMoney}
        </div>
      </div>
      <div className="flex flex-row p-2 justify-between">
        <CommonBtn
          bgColor="purple"
          additionalClass="w-20 h-14 mr-36"
          onClick={onRefundMoney}
        >
          잔돈 반환
        </CommonBtn>
        <MoneyBtnList checkUserMoney={true} onIncreaseMoney={onIncreaseMoney} />
      </div>
    </div>
  );
}

export default MoneySlotArea;
