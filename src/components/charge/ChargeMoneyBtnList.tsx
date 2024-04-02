import ChargeMoneyBtnItem from '@/components/charge/ChargeMoneyBtnItem';

const chargeMoneyList = [100, 500, 1000, 5000];

function ChargeMoneyBtnList() {
  const moneyList = chargeMoneyList.map((money, index) => (
    <ChargeMoneyBtnItem key={index} money={money} />
  ));

  return <div>{moneyList}</div>;
}

export default ChargeMoneyBtnList;
