
import { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { SquareMinus, SquarePlus, Trash2 } from 'lucide-react';




function Cart(){

    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    let total = 0;
    for (const item of cart) {
    total += item.price * item.qty;
   
}


const navigate = useNavigate();

const [payement, setpayement] = useState("cod");
const [showqr , setshowqr] = useState(false);

const [name , setname ] = useState("");
const [phone , setphone ] = useState("");
const [address , setaddress ] = useState("");

const [searchTerm , setsearchTerm] = useState("");
const [cartQty , setcartQty] = useState(JSON.parse(localStorage.getItem("cart"))|| [])

const filteredCart = cart.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
)

const handleRemoveItem = (index) =>{
  const updatedCart = [...cart];
  {/**Removed one item at a time */}
  updatedCart.splice(index , 1);
  {/**Update th elocal Storage */}
  localStorage.setItem("cart", JSON.stringify(updatedCart))
   // Force re-render by updating state
  window.location.reload(); 
}

const handleIncrement = (index)=>{
  const updatedCart = [...cartQty];
  updatedCart[index].qty +=1;
  setcartQty(updatedCart)
  localStorage.setItem("cart", JSON.stringify(updatedCart));

}

const handleDecrement = (index)=>{
  const updatedCart = [...cartQty];
  updatedCart[index].qty -=1;

  if(updatedCart[index].qty <= 0){
      updatedCart.splice(index,1)
  }
  setcartQty(updatedCart)
  localStorage.setItem("cart", JSON.stringify(updatedCart));

}


const handlePlaceOrder = () =>{
  if (!name || !phone || !address) {
    alert("Please fill in all the fields before placing the order.");
    return;
  }
   navigate('/bill' , {
    state: {name , phone , address , cart, total}
  }
  )
}
  
 



useEffect(() =>{
  if(payement ==='gpay'){
    setshowqr(true);
    const timer = setTimeout(() =>{setshowqr(false)},20000)
    return () => clearTimeout(timer)
  }else{
    setshowqr(false)
  }
} , [payement])

let payementAction;
if(payement == 'cod'){
  payementAction = <div></div>;
}else{
  payementAction = (
    <div className="qr-code">
      <h4>Scan the Qr code</h4>
      {showqr ? ( 
        <>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=upi://pay?pa=your-upi-id@bank&pn=YourName&am=${total}`}
          alt="QR Code for Payment"
        />
        </>
        
      ):(
          <p>QR code expired</p>
        )
      
      }
    </div>
  );
}
    
    return(
        <div className='cart-container'>

            <div className="shopping-cart">
            <h1>Shopping Cart</h1>
          
          <div className="search-container">

          <input 
           type="text" 
           placeholder="Search items..." 
           value={searchTerm} 
           onChange={(e) => setsearchTerm(e.target.value)} 
          />

{/* Dropdown list */}

{searchTerm && (
  <div className="dropdown">
    {filteredCart.length === 0 ? (
      <div className="dropdown-item">No matches found</div>
    ) : (
      filteredCart.map((item, index) => (
        <div 
          key={index} 
          className="dropdown-item"
          onClick={() => setsearchTerm(item.title)} 
        >
          {item.title}
        </div>
      ))
    )}

  </div>
)}
</div>
  </div>
    <hr></hr>

    <div className='items'>
    {/**Heading */}
         
      <div>Items</div>
      <div>Qty</div>
      <div>Price</div>
      <div>Amount</div>
           

    </div>

    {cart.length === 0 ? (
     <p>No items in the cart...</p>
      ) : 
       (
      cart.map((item, index) => (
      <div key={index} className="main-container items">
        <div className="item-name">{item.title}</div>
        <div className="qty">{item.qty}</div>
        <div className="price">{item.price}</div>
        <div className="amount">{item.qty * item.price}</div>

        <button className='removeBtn inc' onClick={()=> handleRemoveItem(index)}><Trash2 /></button>
        <button className='inc' onClick={()=> handleIncrement(index)}><SquarePlus /></button>
        <button className='inc' onClick={()=> handleDecrement(index)}><SquareMinus /></button>

      </div>
        ))
          )}

         <div className='total'>Total: {total.toFixed(2)}</div>
            

          {/**Proceed for Payement.... */}
          <div className="payement">
            <h3 style={{'margin':'1rem'}}>Proceed for Payement..</h3>
            <hr style={{'margin':'1rem'}} />
           <div className="form-container">

             <label>Name:</label>
            <input 
            id="name" 
            value={name} 
            type='text'
            onChange={(e) => setname(e.target.value)}
            />

            <br />
             <label>Phone:</label>
            <input 
            id="phone" 
            value={phone} 
            type='phone'
            onChange={(e) => setphone(e.target.value)}
            />
            <br />

           <label>Address:</label>
           <textarea 
           id="name" 
           value={address}  
           onChange={(e) => setaddress(e.target.value)}
           />

           <br />

            <label>Payment Method:</label>
           
            <span className="payment-options">
            <input 
             type="radio"
             id="cod" 
             name="payment" 
             value="cod" 
             checked={payement=='cod'}
             onChange={(e) => setpayement(e.target.value)}
              />
            <label htmlFor="cod">Cash on Delivery</label>
            
            <input 
            type="radio" 
            id="gpay" 
            name="payment" 
            value="gpay"
             onChange={(e) => setpayement(e.target.value)}
            checked={payement=="gpay"}
            />
            <label htmlFor="gpay">Google Pay</label>
          </span>

          <div className="payement-action">
            {payementAction}
          </div>
          
           </div>
           <div className="bill-generation">
            <button onClick={handlePlaceOrder}>
              Proceed for bill
            </button>
           </div>

          </div>

         
        </div>
    )
}

export default Cart;