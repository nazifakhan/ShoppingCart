import { useEffect, useState } from 'react';
import './BillHistory.css';

function BillHistory() {
  const [orders, setOrders] = useState([]);

 useEffect(() => {
  const email = localStorage.getItem("userEmail");
  if (!email) {
    console.error("No email found in localStorage");
    return;
  }

  fetch(`/orders/byEmail/${email}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error("Unexpected response:", data);
        setOrders([]);
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setOrders([]);
    });
}, []);

  return (
    <div>
      <h2>Previous Orders...</h2>
      <div className="orderhistory">
        {orders.length === 0 ? (
          <p>No previous Orders....</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order">
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Name:</strong> {order.userId?.name}</p>
              <p><strong>Email:</strong> {order.userId?.email}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <h4>Items:</h4>
              {order.cart.map((item, i) => (
                <p key={i}>
                  {item.title} x {item.qty} = ${item.qty * item.price}
                </p>
              ))}
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BillHistory;
