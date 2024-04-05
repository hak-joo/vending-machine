import { beverageList } from '@/pages/VendingMachine/Beverage/datas';

const fetchBeverageList = () => {
  return beverageList;
};

const BeverageAPI = {
  fetchBeverageList,
};

export default BeverageAPI;
