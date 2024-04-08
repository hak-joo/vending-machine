import CommonBtn from '../CommanBtn/CommonBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/router/routes';

function Navigator() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLink(target: string) {
    navigate(target);
  }
  return (
    <nav className="flex flex-col fixed bottom-14 right-4 h-48 justify-around bg-gray-100 rounded-2xl p-4 w-30">
      {routes.map((route) => {
        const current = route.path === location.pathname;
        const color = current ? 'blue' : 'gray';

        return (
          <CommonBtn
            key={route.path}
            disabled={current}
            additionalClass="w-14 h-14"
            shape="circle"
            bgColor={color}
            textColor="white"
            onClick={() => handleLink(route.path)}
          >
            {route.title}
          </CommonBtn>
        );
      })}
    </nav>
  );
}

export default Navigator;
