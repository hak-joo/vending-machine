import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';

function Charge() {
  const [user, setUser] = useAtom(userAtom);
  const [money, setMoney] = useState(0);

  const chargeMoney = () => {};

  const handleMoneyChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <input
        type="number"
        id="money"
        placeholder="금액"
        onChange={handleMoneyChange}
        style={{
          display: 'block',
          marginBottom: '10px',
          border: '1px solid',
        }}
      />
      <button className="border border-gray-500 mr-10" onClick={chargeMoney}>
        충전
      </button>

      <div>현재 잔액 : {user.money}</div>
    </>
  );
}

export default Charge;
