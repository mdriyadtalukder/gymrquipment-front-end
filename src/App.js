import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additems from './components/Additems/Additems';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Home/Product/Product';
import ProductCardId from './components/Home/Product/ProductCardId';
import LogIn from './components/LogIn/LogIn';
import Myitems from './components/Myitems/Myitems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products/:productsCardId' element={
          <RequireAuth>
            <ProductCardId></ProductCardId>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <Additems></Additems>
          </RequireAuth>
        }></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
