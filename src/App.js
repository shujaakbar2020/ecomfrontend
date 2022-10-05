import React from 'react';
import './index.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';

function App() {
  console.log(process.env);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<ProductList />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='cart'>
            <Route index element={<Cart />} />
          </Route>
          <Route path='account'>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
