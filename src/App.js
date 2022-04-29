import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductCardId from './components/Home/Product/ProductCardId';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:productsCardId' element={<ProductCardId></ProductCardId>}></Route>
      </Routes>
    </div>
  );
}

export default App;
