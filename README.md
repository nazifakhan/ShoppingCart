# 🛍️ MyShop - MERN Stack E-Commerce App

## 📖 Overview
MyShop is a simple e-commerce application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It allows users to **sign up, log in, browse products, add items to cart, and place orders**.  
The app demonstrates secure authentication using **bcrypt** for password hashing and **JWT tokens** for session management.

---

## 🚀 Features
- **[User Authentication](ca://s?q=Explain_user_authentication_in_MERN)**  
  - Sign Up with name, email, password, and phone number.  
  - Login with email and password.  
  - Passwords are securely hashed using **bcrypt**.  
  - JWT tokens are generated for secure sessions.

- **[Order Management](ca://s?q=Explain_order_management_in_MERN)**  
  - Place new orders with cart details, total amount, and payment method.  
  - Fetch previous orders by user ID or email.  
  - Orders are linked to users in MongoDB.

- **[Frontend (React)](ca://s?q=Explain_React_frontend_in_MERN)**  
  - Login/Signup form with validation.  
  - Navbar showing logged-in user’s name and cart quantity.  
  - Cart badge updates dynamically based on items.  
  - Logout clears session and cart data.

- **[Backend (Express + MongoDB)](ca://s?q=Explain_Express_MongoDB_backend)**  
  - REST API endpoints for signup, login, and orders.  
  - MongoDB models for Users and Orders.  
  - Secure routes protected with JWT middleware.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** bcrypt, JWT  
- **Other Tools:** dotenv, cors  

---


