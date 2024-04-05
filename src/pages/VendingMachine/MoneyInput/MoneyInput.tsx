import CommonBtn from '@/components/CommanBtn/CommonBtn';
import MoneyInputBtnList from './MoneyInputBtnList/MoneyInputBtnList';

function MoneyInput() {
  return (
    <div>
      <div className="w-full h-full border-2 border-yellow-50 rounded-lg bg-yellow-50 text-right my-4">
        투입 금액
      </div>
      <div>
        <MoneyInputBtnList></MoneyInputBtnList>
      </div>
    </div>
  );
}

export default MoneyInput;
