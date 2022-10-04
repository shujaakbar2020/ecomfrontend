import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';

const home = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/products',
    element: <ProductList />
  },
  {
    path: '/product/:id',
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={home} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
