import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charge from './pages/charge/Charge';
import Main from './pages/main/Main';
import VendingMachinePage from './pages/vendingMachinePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/charge" element={<Charge />} />
      <Route path="/beverage" element={<VendingMachinePage />} />
    </Routes>
  );
}

export default App;
