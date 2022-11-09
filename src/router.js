import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
];

const router = createBrowserRouter(routes);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
