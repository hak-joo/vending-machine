import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import { chargeMoneyList } from './data.ts';

interface MoneyBtnListType {
  checkUserMoney: boolean;
  onIncreaseMoney: (increaseMoney: number) => void;
}

function MoneyBtnList({ checkUserMoney, onIncreaseMoney }: MoneyBtnListType) {
  const [user, setUser] = useAtom(userAtom);
  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    const isEnoughMoney = user.money < moneyBtn.money;
    const isDisabled = checkUserMoney && isEnoughMoney;

    const imgClassName =
      moneyBtn.money < 1000 ? 'absolute' : 'absolute bottom-0 left-0';
    const moneyImg = (
      <img
        src={moneyBtn.imgurl}
        width={48}
        height={48}
        className={imgClassName}
      />
    );

    return (
      <CommonBtn
        key={index}
        {...moneyBtn}
        bgColor={isDisabled ? 'red' : moneyBtn.bgColor}
        border={isDisabled ? 'red' : moneyBtn.border}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
        disabled={isDisabled}
      >
        {isDisabled ? (
          'X'
        ) : (
          <>
            <span className="z-50">{moneyBtn.money}</span>
            {moneyImg}
          </>
        )}
      </CommonBtn>
    );
  });

  return <>{moneyList}</>;
}

export default MoneyBtnList;
