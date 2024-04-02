import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';

function Charge() {
  const [user, setUser] = useAtom(userAtom);
  const [money, setMoney] = useState(0);
  const [errorMassage, setErrorMessage] = useState('');

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
    setMoney(parseInt(replaceMoney));
  };

  return (
    <>
      <input
        type="number"
        id="money"
        placeholder="금액"
        value={money === 0 ? '' : money}
        onChange={handleMoneyChange}
        style={{
          display: 'block',
          marginBottom: '10px',
          border: '1px solid',
        }}
      />
      <p style={{ color: 'red' }}>{errorMassage}</p>
      <button className="border border-gray-500 mr-10" onClick={chargeMoney}>
        충전
      </button>

      <div>현재 잔액 : {user.money}</div>
    </>
  );
}

export default Charge;
