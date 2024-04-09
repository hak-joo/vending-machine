import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import App from '@/App';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
