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
    const disabled = user.money < moneyBtn.money;
    const imgBtnClassName =
      moneyBtn.money < 1000 ? 'absolute' : 'absolute bottom-0 left-0';

    const moneyImg = (
      <img
        src={moneyBtn.imgurl}
        width={48}
        height={48}
        className={imgBtnClassName}
      />
    );

    return checkUserMoney ? (
      <CommonBtn
        key={index}
        {...moneyBtn}
        bgColor={disabled ? 'red' : moneyBtn.bgColor}
        border={disabled ? 'red' : moneyBtn.border}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
        disabled={disabled}
      >
        {disabled ? (
          'X'
        ) : (
          <>
            <span className="z-50">{moneyBtn.money}</span>
            {moneyImg}
          </>
        )}
      </CommonBtn>
    ) : (
      <CommonBtn
        key={index}
        {...moneyBtn}
        onClick={() => {
          onIncreaseMoney(moneyBtn?.money);
        }}
      >
        <>
          {'+' + moneyBtn.money}
          {moneyImg}
        </>
      </CommonBtn>
    );
  });

  return <>{moneyList}</>;
}

export default MoneyBtnList;
