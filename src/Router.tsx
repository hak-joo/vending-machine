import { Route, Routes } from 'react-router-dom';
import Charge from './pages/Charge/Charge';
import VendingMachinePage from './pages/VendingMachine/VendingMachine';

function Router() {
  return (
    <Routes>
      <Route path="/charge" element={<Charge />} />
      <Route path="/" element={<VendingMachinePage />} />
    </Routes>
  );
}

export default Router;
