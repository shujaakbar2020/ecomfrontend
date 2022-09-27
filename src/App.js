import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path='/'>
    //       <Home />
    //     </Route>
    //     <Route path='/products/'>
    //       <ProductList />
    //     </Route>
    //     <Route path='/product/'>
    //       <Product />
    //     </Route>
    //     <Route path='/register/'>
    //       <Register />
    //     </Route>
    //     <Route path='/login/'>
    //       <Login />
    //     </Route>
    //     <Route path='/cart/'>
    //       <Cart />
    //     </Route>
    //   </Switch>
    // </Router>
    <></>
  );
}

export default App;
