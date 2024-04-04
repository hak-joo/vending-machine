import { beverageList } from '@/data/beverageList';

const fetchBeverageList = () => {
  return beverageList;
};

const BeverageAPI = {
  fetchBeverageList,
};

export default BeverageAPI;
