import React, { useState } from 'react';

export interface InputMoneyContextType {
  inputMoney: number;
  setInputMoney: (money: number) => void;
}

export const useInputMoney = () => {
  const [inputMoney, setInputMoney] = React.useState<number>(0);

  const handleClick = (money: number) => {
    setInputMoney(inputMoney + money);
    console.log(inputMoney);
  };

  return {
    inputMoney,
    handleClick,
  };
};

export const inputMoneyContext = React.createContext({
  inputMoney: 0,
  increaseMoney: (money: number) => {
    console.log(money);
  },
});

export const InputMoney = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [inputMoney, setInputMoney] = useState(0);

  const handleClick = (money: number): void => {
    console.log(money);
    setInputMoney(inputMoney + money);
  };

  return (
    <inputMoneyContext.Provider
      value={{ inputMoney, increaseMoney: handleClick }}
    >
      {children}
    </inputMoneyContext.Provider>
  );
};
