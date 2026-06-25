// src/components/Navbar.jsx
import { ShoppingCart } from 'lucide-react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const UserName = localStorage.getItem("UserName")

  const totalQty = cart.reduce((sum , item) => sum + item.qty, 0);
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("auth");
    localStorage.removeItem("cart");
    localStorage.removeItem("UserName");
    navigate("/")
  }
  return (
    <nav className="navbar">
      <div className="logo">
      <div>MyShop</div>
      

      </div>

      <div className="logo">
        <div>
          Welcome {UserName}
          
          </div>
      </div>

      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart" className='cart-icon '><ShoppingCart />
        {totalQty > 0 && <span className='badge'>{totalQty}</span>}


        {/**Execution:
          Start with sum = 0.
          First item: sum + item.qty = 0 + 2 = 2.
          Second item: sum + item.qty = 2 + 3 = 5.
          Final result: totalQty = 5. */}
        </a></li>
        
          {localStorage.getItem("auth") && 
          (
             <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
          )
          }
      </ul>
    </nav>
  );
}

export default Navbar;   
