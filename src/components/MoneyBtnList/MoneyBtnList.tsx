import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import { chargeMoneyList, getMoneyBtnContent } from './data.tsx';

interface MoneyBtnListType {
  checkUserMoney: boolean;
  onIncreaseMoney: (increaseMoney: number) => void;
}

function MoneyBtnList({ checkUserMoney, onIncreaseMoney }: MoneyBtnListType) {
  const [user] = useAtom(userAtom);
  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    const isEnoughMoney = user.money >= moneyBtn.money;
    const isDisabled = checkUserMoney && !isEnoughMoney;

    const buttonContent = isDisabled ? 'X' : getMoneyBtnContent(moneyBtn);

    return (
      <CommonBtn
        key={index}
        {...moneyBtn}
        bgColor={isDisabled ? 'red' : moneyBtn.bgColor}
        border={isDisabled ? 'red' : moneyBtn.border}
        onClick={() => onIncreaseMoney(moneyBtn.money)}
        disabled={isDisabled}
      >
        {buttonContent}
      </CommonBtn>
    );
  });

  return moneyList;
}

export default MoneyBtnList;
