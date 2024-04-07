import React from 'react';

export const inputMoneyContext = React.createContext({});

export const InputMoney = ({ children }: { children: React.ReactNode }) => {
  const [inputMoney, setInputMoney] = React.useState<number>(0);

  return (
    <inputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
      {children}
    </inputMoneyContext.Provider>
  );
};
