import { useLocation, useNavigate } from 'react-router-dom';
import './Bill.css';
function Bill(){
     const location = useLocation();
     const navigate = useNavigate();
     const {name , phone , address , cart , total} = location.state || {};

     const orderSucessfull = () =>{
      alert("order placed sucessfully")
       localStorage.removeItem("cart"); 
      navigate("/Home");
     }
    return(
       
        <>
         {/**Bill section */}
           
          <div className="bill-container">
            
              <div className="bill">
                <h2>Bill Details:-</h2>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Address:</strong> {address}</p>
            <h3>Items:</h3>
          {cart.map((item, index) => (
            <p key={index}>
              {item.title} x {item.qty} = ${item.qty * item.price}
            </p>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>

          <div className="placeOrder">
              <button onClick={orderSucessfull}>Place Order</button>
            </div>

            </div>
           
          </div>

           
          
        </>
    )
}
export default Bill;