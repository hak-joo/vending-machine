import { useAtom } from 'jotai';
import { userAtom } from '@/store/atoms';

function Charge() {
  const [user, setUser] = useAtom(userAtom);

  const chargeMoney = (money: number) => {
    const updatedUser = {
      ...user,
      money: user.money + money,
    };
    setUser(updatedUser);
  };
  return (
    <>
      <button
        className="border border-gray-500 mr-10"
        onClick={() => chargeMoney(100)}
      >
        100
      </button>
      <button
        className="border border-gray-500"
        onClick={() => chargeMoney(500)}
      >
        500
      </button>

      <div>{user.money}</div>
    </>
  );
}

export default Charge;
