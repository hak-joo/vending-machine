import React, { useState } from 'react';

export interface InputMoneyContextType {
  inputMoney: number;
  setInputMoney: (money: number) => void;
  resetInputMoney: () => void;
}

export const inputMoneyContext = React.createContext({
  inputMoney: 0,
  increaseInputMoney: (money: number) => {},
  resetInputMoney: () => {},
});

export const InputMoney = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [inputMoney, setInputMoney] = useState(0);

  const increaseInputMoney = (money: number): void => {
    setInputMoney(inputMoney + money);
  };
  const resetInputMoney = () => {
    setInputMoney(0);
  };

  return (
    <inputMoneyContext.Provider
      value={{ inputMoney, increaseInputMoney, resetInputMoney }}
    >
      {children}
    </inputMoneyContext.Provider>
  );
};
