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
    <div className="flex flex-col bg-lime-300 p-2 rounded-lg">
      <div className="my-3 flex ">
        <div>
          <div className="inline-block w-72 text-green-200 text-4xl font-bold bg-gray-700 border-4 border-gray-800 rounded-lg p-2 text-right">
            \{insertedMoney}
          </div>

          <CommonBtn
            additionalClass="w-14 h-14 align-top mx-2"
            onClick={onRefundMoney}
          >
            <img src="src/assets/refund.png" width={50} height={50} />
          </CommonBtn>
        </div>

        <div className="grid grid-cols-2 gap-2 p-2 justify-items-center align-middle">
          <MoneyBtnList
            checkUserMoney={true}
            onIncreaseMoney={onIncreaseMoney}
          />
        </div>
      </div>
    </div>
  );
}

export default MoneySlotArea;
