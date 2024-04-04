import CommonBtn from '@/components/button/CommonBtn';
import { ButtonProps } from '@/types/Button';

// 충전 금액 type
// 공통 버튼 컴포넌트의 props에 money 속성 추가
type chargeMoneyType = ButtonProps & {
  money: number;
};

// 충전 금액 리스트
// 가격, className이 정의
const chargeMoneyList: chargeMoneyType[] = [
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

type ChargeMoneyBtnListType = {
  onIncreaseMoney: (increaseMoney: number) => void;
};

function ChargeMoneyBtnList({ onIncreaseMoney }: ChargeMoneyBtnListType) {
  const moneyList = chargeMoneyList.map((moneyBtn, index) => {
    return (
      <CommonBtn
        key={index}
        {...moneyBtn}
        onClick={() => onIncreaseMoney(moneyBtn?.money)}
      >
        +{moneyBtn?.money}
      </CommonBtn>
    );
  });

  return <div>{moneyList}</div>;
}

export default ChargeMoneyBtnList;
