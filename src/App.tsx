import { Route, Routes } from 'react-router-dom';
import Charge from './pages/Charge/Charge';
import VendingMachinePage from './pages/VendingMachine/VendingMachine';
import { InputMoney } from './context/InputMoneyContext';

function App() {
  return (
    <Routes>
      <Route path="/charge" element={<Charge />} />
      <Route
        path="/"
        element={
          <InputMoney>
            <VendingMachinePage />
          </InputMoney>
        }
      />
    </Routes>
  );
}

export default App;
