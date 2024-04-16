import CommonBtn from '@/components/CommanBtn/CommonBtn';
import { useCountingNumber } from '@/hooks/useCountNumber';
import { userAtom } from '@/store/atoms';
import { useAtom } from 'jotai';

import { useNavigate } from 'react-router-dom';

function Wallet() {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();
  function handleChargeLink() {
    navigate('/charge');
  }

  const countMoney = useCountingNumber(user.money);

  return (
    <div className="flex self-center w-[500px] min-w-[500px] ">
      <div className="bg-phone w-9/12 h-[600px] bg-contain bg-no-repeat">
        <div className="px-20 py-20 h-full">
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center w-full rounded-2xl h-16 p-3 bg-gray-100 text-2xl my-5 font-sans">
              다우뱅크
            </div>

            <div className="flex-1 items-center w-full rounded-2xl h-16 p-3 bg-gray-100 ">
              <span className="text-xl font-sans">자산</span>

              <div className="w-full flex h-16 my-3 justify-around items-center">
                <div className="flex flex-col flex-1 ">
                  <div className="text-xs">주거래 은행</div>
                  <div
                    className="max-w-36 text-2xl text-ellipsis overflow-hidden"
                    title={`보유 잔액: ${countMoney.toLocaleString('ko-KR')}`}
                  >
                    {countMoney.toLocaleString('ko-KR')}
                  </div>
                </div>
                <CommonBtn
                  additionalClass="w-12 h-8"
                  shape="circle"
                  border="gray"
                  onClick={handleChargeLink}
                  type="button"
                  description={`충전 페이지`}
                >
                  충전
                </CommonBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
