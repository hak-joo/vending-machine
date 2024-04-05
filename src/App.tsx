import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Navigator from './components/Navigator/Navigator';
import GlobalView from './GlobalView';

function App() {
  return (
    <GlobalView>
      <BrowserRouter>
        <Navigator />

        <Router />
      </BrowserRouter>
    </GlobalView>
  );
}

export default App;
