type ChargeMoneyBtnItemProps = {
  money: number;
};

function ChargeMoneyBtnItem({ money }: ChargeMoneyBtnItemProps) {
  return <button className="border border-gray-500 mr-10">{money}</button>;
}

export default ChargeMoneyBtnItem;
