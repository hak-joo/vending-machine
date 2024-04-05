import { ButtonProps } from '@/types/Button';

// 충전 금액 type
// 공통 버튼 컴포넌트의 props에 money 속성 추가
export type chargeMoneyType = ButtonProps & {
  money: number;
};
