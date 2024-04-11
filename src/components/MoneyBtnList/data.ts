import type { ChargeMoneyType } from './types.ts';

// 충전 금액 리스트
// 가격, className이 정의
export const chargeMoneyList: ChargeMoneyType[] = [
  {
    money: 100,
    bgColor: 'gray',
    textColor: 'white',
    shape: 'circle',
    border: 'gray',
    textAlign: 'center',
    additionalClass: 'w-12 h-12 mt-1 mr-5 border-gray-700',
  },
  {
    money: 500,
    bgColor: 'gray',
    textColor: 'white',
    shape: 'circle',
    border: 'gray',
    textAlign: 'center',
    additionalClass: 'w-14 h-14 mr-5 border-gray-700',
  },
  {
    money: 1000,
    bgColor: 'lightBlue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightBlue',
    textAlign: 'right',
    additionalClass: 'w-20 h-14 mr-5 rounded-md',
  },
  {
    money: 5000,
    bgColor: 'lightOrenge',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightOrenge',
    textAlign: 'right',
    additionalClass: 'w-20 h-14 mr-5 rounded-md',
  },
];
