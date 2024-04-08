import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import { chargeMoneyList } from './data.ts';

type ChargeMoneyBtnListType = {
  checkUserMoney: boolean;
  onIncreaseMoney: (increaseMoney: number) => void;
};

function ChargeMoneyBtnList({
  checkUserMoney,
  onIncreaseMoney,
}: ChargeMoneyBtnListType) {
  const [user, setUser] = useAtom(userAtom);
  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    const disabled = user.money < moneyBtn.money;
    return checkUserMoney ? (
      <CommonBtn
        key={index}
        {...moneyBtn}
        bgColor={disabled ? 'red' : moneyBtn.bgColor}
        border={disabled ? 'red' : moneyBtn.border}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
        disabled={disabled}
      >
        {disabled ? 'X' : moneyBtn.money}
      </CommonBtn>
    ) : (
      <CommonBtn
        key={index}
        {...moneyBtn}
        onClick={() => {
          onIncreaseMoney(moneyBtn?.money);
        }}
      >
        {'+' + moneyBtn.money}
      </CommonBtn>
    );
  });

  return <div>{moneyList}</div>;
}

export default ChargeMoneyBtnList;
