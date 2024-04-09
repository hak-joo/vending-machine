import ReactDOM from 'react-dom/client';
import React from 'react';

import './styles/global.css';

import Router from './router/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
