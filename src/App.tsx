import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Navigator from './components/Navigator/Navigator';

function App() {
  return (
    <>
      <Navigator />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
