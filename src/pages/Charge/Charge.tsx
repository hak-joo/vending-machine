import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import MoneyBtnList from '@/components/MoneyBtnList/MoneyBtnList';
import CommonBtn from '@/components/CommanBtn/CommonBtn';
import '@/styles/charge/Charge.css';
import { chargeBtnClassName } from './datas';

function Charge() {
  const [user, setUser] = useAtom(userAtom);
  const [money, setMoney] = useState(0);

  const chargeMoney = () => {
    if (!confirm('충전 하시겠습니까?')) {
      return;
    }

    const updatedUser = {
      ...user,
      money: user.money + money,
    };
    setUser(updatedUser);
    setMoney(0);
  };

  const handleMoneyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMoney = e.target.value;
    const replaceMoney = inputMoney.replace(/(^0+)/, '');
    setMoney(Number(replaceMoney));
  };

  const handleIncreaseMoney = (increaseMoney: number) => {
    setMoney(money + increaseMoney);
  };

  return (
    <div className="self-center w-[1200px] max-w-[1500px] min-w-[1000px] h-[600px] max-h-[700px] min-h-[500px] flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col items-center border border-indigo-500/50 rounded-lg">
        <p className="text-lg text-cyan-600 mt-10 mb-2">사용자 금액 충전</p>
        <input
          type="number"
          id="money"
          className="w-56 border border-gray-500 rounded-lg m-2 pr-2 text-right block appearance-none"
          placeholder="금액"
          value={money === 0 ? '' : money}
          onChange={handleMoneyChange}
        />
        <div className="my-4 flex">
          <MoneyBtnList
            checkUserMoney={false}
            onIncreaseMoney={handleIncreaseMoney}
          />
        </div>
        <CommonBtn
          {...chargeBtnClassName}
          onClick={chargeMoney}
          type="button"
          description="잔액 충전"
        >
          충전
        </CommonBtn>
        <p className="font-bold m-2">현재 잔액 : {user.money}</p>
      </div>
    </div>
  );
}

export default Charge;
