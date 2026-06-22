import Navbar from './components/Navbar'; 
import './App.css';
import Home from './Components/Home';
import Beauty from './Components/Beauty';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Bill from './Components/Bill';
import LoginSignUp from './Components/LoginSignUp';
import Perfume from './Components/perfume';
import Furniture from './Components/Furniture';
import Groceries from './Components/Groceries';
import ContactUs from './Components/ContactUs';


    function PrivateRoute({children}){
      const isAuth = localStorage.getItem("auth") == "true";

      return isAuth ? children : <Navigate to="/" />;
    }
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/beauty" element={<PrivateRoute><Beauty /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
         <Route path="/bill" element={<PrivateRoute><Bill /></PrivateRoute>} />
         <Route path="/perfume" element={<PrivateRoute><Perfume /></PrivateRoute>} />
         <Route path="/furniture" element={<PrivateRoute><Furniture /></PrivateRoute>} />
         <Route path="/groceries" element={<PrivateRoute><Groceries /></PrivateRoute>} />
         <Route path="/contact" element={<PrivateRoute><ContactUs /></PrivateRoute>} />




      </Routes>

      <footer className="footer">
        <p>© 2026 MyShop. All rights reserved.</p>
        <p>Contact: support@myshop.com</p>
      </footer>
    </>
  );
}

export default App;
