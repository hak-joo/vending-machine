import React from 'react';

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

export const inputMoneyContext = React.createContext<InputMoneyContextType>({
  inputMoney: 0,
  setInputMoney: () => {},
});

export const InputMoney = ({ children }: { children: React.ReactNode }) => {
  const { inputMoney, setInputMoney } =
    React.useContext<InputMoneyContextType>(inputMoneyContext);

  return (
    <inputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
      {children}
    </inputMoneyContext.Provider>
  );
};
