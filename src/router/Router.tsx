import { Route, Routes, RouteObject } from 'react-router-dom';
import Charge from '@/pages/Charge/Charge';
import VendingMachinePage from '@/pages/VendingMachine/VendingMachine';
import { routes } from './routes';

function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default Router;
