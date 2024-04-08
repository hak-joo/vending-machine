import CommonBtn from '@/components/CommanBtn/CommonBtn';
import ChargeMoneyBtnList from '@/pages/Charge/ChargeMoneyBtnList/ChargeMoneyBtnList';

type MoneyInputType = {
  inputMoney: number;
  onRefundMoney: () => void;
  onIncreaseMoney: (money: number) => void;
};

function MoneyInput({
  inputMoney,
  onRefundMoney,
  onIncreaseMoney,
}: MoneyInputType) {
  return (
    <div className="flex flex-col bg-lime-300 p-2">
      <div className="">
        <div className="text-lime-700 text-4xl font-bold bg-lime-300 border-4 border-lime-700 rounded-lg p-2 text-right">
          넣은 돈: {inputMoney}
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
        <ChargeMoneyBtnList
          checkUserMoney={true}
          onIncreaseMoney={onIncreaseMoney}
        />
      </div>
    </div>
  );
}

export default MoneyInput;
