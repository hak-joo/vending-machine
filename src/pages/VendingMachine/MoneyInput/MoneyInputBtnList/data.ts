import { CommandBtnType } from '@/components/CommanBtn/types';
import { MoneyInputBtnType } from './types';

export const moneyInputBtnList: MoneyInputBtnType[] = [
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
    additionalClass: 'w-1/6 h-14 mr-5',
  },
  {
    money: 5000,
    bgColor: 'blue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'blue',
    textAlign: 'right',
    additionalClass: 'w-1/6 h-14 mr-5',
  },
];

export const refundMoney: CommandBtnType = {
  bgColor: 'purple',
  textColor: 'white',
  shape: 'rectangle',
  border: 'purple',
  textAlign: 'center',
  additionalClass: 'w-1/6 h-14 mr-5',
};
