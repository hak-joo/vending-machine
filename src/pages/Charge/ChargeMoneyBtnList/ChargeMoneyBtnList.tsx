import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { chargeMoneyList } from './data.ts';

type ChargeMoneyBtnListType = {
  onIncreaseMoney: (increaseMoney: number) => void;
};

function ChargeMoneyBtnList({ onIncreaseMoney }: ChargeMoneyBtnListType) {
  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    return (
      <CommonBtn
        key={index}
        {...moneyBtn}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
      >
        +{moneyBtn?.money}
      </CommonBtn>
    );
  });

  return <div>{moneyList}</div>;
}

export default ChargeMoneyBtnList;
