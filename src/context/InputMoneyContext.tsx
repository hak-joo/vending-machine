import React, { useState } from 'react';

export interface InputMoneyContextType {
  inputMoney: number;
  setInputMoney: (money: number) => void;
}

export const inputMoneyContext = React.createContext({
  inputMoney: 0,
  increaseMoney: (money: number) => {},
});

export const InputMoney = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [inputMoney, setInputMoney] = useState(0);

  const increaseMoney = (money: number): void => {
    setInputMoney(inputMoney + money);
  };

  return (
    <inputMoneyContext.Provider value={{ inputMoney, increaseMoney }}>
      {children}
    </inputMoneyContext.Provider>
  );
};
