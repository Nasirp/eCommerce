import {  Routes, Route } from "react-router-dom";
import Products from './pages/Products/products';
import SignUp from './pages/SignUp/SignUp';
import Login  from './pages/Login/Login';
import Cart from "./pages/Cart/Cart"
function App() {
  return (
    <>
  <Routes>
         
         <Route path="/" element={<Products/>}/>
         <Route path="/cart" element={<Cart/>} />
           <Route path="/Login" element={<Login />} />
           <Route path="/signup" element={<SignUp/>}/>
           
          
     </Routes>
    </>
  );
}

export default App;
