import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';
import ChargeMoneyBtnList from '@/pages/Charge/ChargeMoneyBtnList/ChargeMoneyBtnList';
import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { CommandBtnType } from '@/components/CommanBtn/types';
import '@/styles/charge/Charge.css';

// 충전 버튼 className
const chargeBtnClassName: CommandBtnType = {
  textColor: 'white',
  textAlign: 'center',
  additionalClass: 'w-14 h-10 border-indigo-500/50 rounded-lg bg-indigo-500/50',
};

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
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 h-1/4 flex flex-col items-center border border-indigo-500/50 rounded-lg">
        <p className="text-lg text-cyan-600 mt-10 mb-2">사용자 금액 충전</p>
        <input
          type="number"
          id="money"
          className="w-56 border border-gray-500 rounded-lg m-2 pr-2 text-right block  appearance-none"
          placeholder="금액"
          value={money === 0 ? '' : money}
          onChange={handleMoneyChange}
        />
        <div className="my-4 mx-16">
          <ChargeMoneyBtnList onIncreaseMoney={handleIncreaseMoney} />
        </div>
        <CommonBtn {...chargeBtnClassName} onClick={chargeMoney}>
          충전
        </CommonBtn>
        <p className="font-bold m-2">현재 잔액 : {user.money}</p>
      </div>
    </div>
  );
}

export default Charge;
