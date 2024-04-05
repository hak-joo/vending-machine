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
    textAlign: 'right',
    additionalClass: 'w-14 h-14 mr-5',
  },
  {
    money: 500,
    bgColor: 'gray',
    textColor: 'white',
    shape: 'circle',
    border: 'gray',
    textAlign: 'right',
    additionalClass: 'w-14 h-14 mr-5',
  },
  {
    money: 1000,
    bgColor: 'blue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'blue',
    textAlign: 'right',
    additionalClass: 'w-20 h-14 mr-5',
  },
  {
    money: 5000,
    bgColor: 'blue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'blue',
    textAlign: 'right',
    additionalClass: 'w-20 h-14 mr-5',
  },
];
