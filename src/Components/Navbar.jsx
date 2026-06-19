// src/components/Navbar.jsx
import { ShoppingCart } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const totalQty = cart.reduce((sum , item) => sum + item.qty, 0);
  return (
    <nav className="navbar">
      <div className="logo">
      <div>MyShop</div>

      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart" className='cart-icon '><ShoppingCart />
        {totalQty > 0 && <span className='badge'>{totalQty}</span>}

        {/**Execution:
          Start with sum = 0.
          First item: sum + item.qty = 0 + 2 = 2.
          Second item: sum + item.qty = 2 + 3 = 5.
          Final result: totalQty = 5. */}
        </a></li>

      </ul>
    </nav>
  );
}

export default Navbar;   // ✅ make sure this line exists
