import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import { chargeMoneyList } from './data.ts';

interface MoneyBtnListType {
  checkUserMoney: boolean;
  onIncreaseMoney: (increaseMoney: number) => void;
}

function MoneyBtnList({ checkUserMoney, onIncreaseMoney }: MoneyBtnListType) {
  const [user] = useAtom(userAtom);

  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    const disabled = user.money < moneyBtn.money;

    const isEnoughUserMoney = checkUserMoney && disabled;
    const buttonLabel = isEnoughUserMoney ? 'X' : '+' + moneyBtn.money;

    return (
      <CommonBtn
        key={index}
        {...moneyBtn}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
        bgColor={isEnoughUserMoney ? 'red' : moneyBtn.bgColor}
        border={isEnoughUserMoney ? 'red' : moneyBtn.border}
        disabled={isEnoughUserMoney}
      >
        {buttonLabel}
      </CommonBtn>
    );
  });

  return moneyList;
}

export default MoneyBtnList;
