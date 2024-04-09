import { Outlet } from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import GlobalView from './GlobalView';

function App() {
  return (
    <GlobalView>
      <Navigator />
      <Outlet />
    </GlobalView>
  );
}

export default App;
