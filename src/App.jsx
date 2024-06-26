import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Loader from "./components/loader/Loader";
import ProductDetails from "./pages/ProductDetails";
import { getProducts } from "./redux/slices/products";
import { getCategories } from "./redux/slices/categories";
import { useDispatch } from "react-redux";
import { showErrorPopup } from "./redux/slices/popup";
import EmptyCart from "./components/EmptyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <EmptyCart buttonText="Go To Home" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getProducts()).unwrap();
        await dispatch(getCategories()).unwrap();
      } catch (error) {
        dispatch(showErrorPopup(error.message))
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dispatch])
  return isLoading ? <Loader /> : <RouterProvider router={router} />;
}

export default App;
