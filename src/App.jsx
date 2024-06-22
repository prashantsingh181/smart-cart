import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
