import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { moneyInputBtnList, refundMoney } from './data';

function MoneyInputBtnList() {
  const moneyList = moneyInputBtnList.map((moneyBtn, index) => {
    return (
      <CommonBtn key={index} {...moneyBtn}>
        {moneyBtn.money}
      </CommonBtn>
    );
  });
  return (
    <div>
      <CommonBtn {...refundMoney}>잔돈 반환</CommonBtn>
      {moneyList}
    </div>
  );
}

export default MoneyInputBtnList;
