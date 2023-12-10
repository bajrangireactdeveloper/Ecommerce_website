import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Shop/>}></Route>
         <Route path='/mens' element={<ShopCategory category="Men"/>}/>
         <Route path='/womens' element={<ShopCategory category="Women"/>}/>
         <Route path='/kids' element={<ShopCategory category="Kids"/>}/>
         <Route path='/product' element={<Product/>}>
           <Route path=':productID' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>

       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
