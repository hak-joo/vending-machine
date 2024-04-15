import { beverageList } from '@/pages/VendingMachine/Beverage/datas.tsx';

const fetchBeverageList = () => {
  return beverageList;
};

const BeverageAPI = {
  fetchBeverageList,
};

export default BeverageAPI;
