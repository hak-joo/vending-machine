import type { ChargeMoneyType } from './types.ts';

// 충전 금액 리스트
// 가격, className이 정의
export const chargeMoneyList: ChargeMoneyType[] = [
  {
    money: 100,
    imgUrl: 'src/assets/money100.png',
    textColor: 'white',
    shape: 'circle',
    textAlign: 'center',
    additionalClass:
      "w-14 h-14 mt-1 mr-5 bg-[url('./src/assets/money100.png')] bg-cover font-normal",
  },
  {
    money: 500,
    imgUrl: 'src/assets/money500.png',
    textColor: 'white',
    shape: 'circle',
    textAlign: 'center',
    additionalClass:
      "w-16 h-16 mr-5 bg-[url('./src/assets/money500.png')] bg-cover font-normal",
  },
  {
    money: 1000,
    imgUrl: 'src/assets/money1000.png',
    bgColor: 'lightBlue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightBlue',
    textAlign: 'right',
    additionalClass: 'w-28 h-12 mr-5 mt-2 rounded-md px-3',
  },
  {
    money: 5000,
    imgUrl: 'src/assets/money5000.png',
    bgColor: 'lightOrenge',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightOrenge',
    textAlign: 'right',
    additionalClass: 'w-28 h-12 mr-5 mt-2 rounded-md px-3',
  },
];
