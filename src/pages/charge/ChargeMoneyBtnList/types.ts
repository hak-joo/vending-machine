import { CommandBtnType } from '@/components/CommanBtn/types';

// 충전 금액 type
// 공통 버튼 컴포넌트의 props에 money 속성 추가
export type ChargeMoneyType = CommandBtnType & {
  money: number;
};
