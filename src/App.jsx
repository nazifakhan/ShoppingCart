import Navbar from './components/Navbar'; 
import './App.css';
import Home from './Components/Home';
import Beauty from './Components/Beauty';
import { Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Bill from './Components/Bill';
import LoginSignUp from './Components/LoginSignUp';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/" element={<LoginSignUp />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/bill" element={<Bill />} />

      </Routes>

      <footer className="footer">
        <p>© 2026 MyShop. All rights reserved.</p>
        <p>Contact: support@myshop.com</p>
      </footer>
    </>
  );
}

export default App;
