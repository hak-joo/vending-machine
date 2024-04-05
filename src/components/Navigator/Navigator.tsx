import { useEffect } from 'react';
import CommonBtn from '../CommanBtn/CommonBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/router/routes';

function Navigator() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
  });

  function handleLink(target: string) {
    navigate(target);
  }
  return (
    <nav className="flex flex-col fixed bottom-14 right-4 h-56 justify-around bg-gray-100 rounded-lg p-4">
      {routes.map((route) => {
        const color = route.path === location.pathname ? 'blue' : 'gray';
        return (
          <CommonBtn
            additionalClass="w-16 h-16"
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
