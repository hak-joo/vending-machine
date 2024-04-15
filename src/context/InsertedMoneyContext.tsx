import { PropsWithChildren, useState, createContext } from 'react';

export interface InsertedMoneyType {
  insertedMoney: number;
  setInsertedMoney: (money: number) => void;
  resetInsertedMoney: () => void;
}

export const InsertedMoneyContext = createContext({
  insertedMoney: 0,
  increaseInsertedMoney: (_money: number) => {},
  resetInsertedMoney: () => {},
});

export function InsertedMoneyProvider({ children }: PropsWithChildren) {
  const [insertedMoney, setInsertedMoney] = useState(0);

  function increaseInsertedMoney(money: number) {
    setInsertedMoney(insertedMoney + money);
  }
  function resetInsertedMoney() {
    setInsertedMoney(0);
  }

  return (
    <InsertedMoneyContext.Provider
      value={{ insertedMoney, increaseInsertedMoney, resetInsertedMoney }}
    >
      {children}
    </InsertedMoneyContext.Provider>
  );
}
