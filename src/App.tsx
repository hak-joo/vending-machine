import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charge from './pages/charge/Charge';
import Main from './pages/main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/charge" element={<Charge />} />
    </Routes>
  );
}

export default App;
