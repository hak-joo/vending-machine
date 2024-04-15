import type { ChargeMoneyType } from './types.ts';

// 충전 금액 리스트
// 가격, className이 정의
export const chargeMoneyList: ChargeMoneyType[] = [
  {
    type: 'button',
    description: '100원 충전',
    money: 100,
    imgurl: 'src/assets/money100.png',
    textColor: 'white',
    shape: 'circle',
    textAlign: 'center',
    additionalClass: 'w-14 h-14 mt-1 mr-5 font-normal',
  },
  {
    type: 'button',
    description: '500원 충전',
    money: 500,
    imgurl: 'src/assets/money500.png',
    textColor: 'white',
    shape: 'circle',
    textAlign: 'center',
    additionalClass: 'w-16 h-16 mr-5 font-normal',
  },
  {
    type: 'button',
    description: '1000원 충전',
    money: 1000,
    imgurl: 'src/assets/money1000.png',
    bgColor: 'lightBlue',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightBlue',
    textAlign: 'right',
    additionalClass: 'w-28 h-12 mr-5 mt-2 rounded-md px-3',
  },
  {
    type: 'button',
    description: '5000원 충전',
    money: 5000,
    imgurl: 'src/assets/money5000.png',
    bgColor: 'lightOrenge',
    textColor: 'white',
    shape: 'rectangle',
    border: 'lightOrenge',
    textAlign: 'right',
    additionalClass: 'w-28 h-12 mr-5 mt-2 rounded-md px-3',
  },
];

export function getMoneyBtnContent(moneyBtn: ChargeMoneyType) {
  const imgClassName =
    moneyBtn.money < 1000 ? 'absolute' : 'absolute bottom-0 left-0';
  return (
    <>
      <span className="z-50">{moneyBtn.money}</span>
      <img
        src={moneyBtn.imgurl}
        width={48}
        height={48}
        className={imgClassName}
      />
    </>
  );
}
