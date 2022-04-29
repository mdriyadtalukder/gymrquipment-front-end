import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additems from './components/Additems/Additems';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Home/Product/Product';
import ProductCardId from './components/Home/Product/ProductCardId';
import LogIn from './components/LogIn/LogIn';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:productsCardId' element={<ProductCardId></ProductCardId>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/additems' element={<Additems></Additems>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
