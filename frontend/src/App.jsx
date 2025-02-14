import Navbar from "./components/navbarUser.jsx";
import Layout from "./components/fixLayouUsert.jsx";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import ShowCart from "./components/showCart.jsx";
import Signup from "./components/Signup.jsx";
import ProductShow from "./components/showProducts.jsx";
import Fruit from "./components/fruit.jsx";
import Login from "./components/login.jsx";
import Checkout from "./components/checkout.jsx";
import OrderConfirm from "./components/orderConfirm.jsx";
import AdminNavbar from "./components/admin.jsx";
import AddProduct from "./components/addProducts.jsx";
import "./index.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function App() {
   axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Layout/>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/showcart" element={<ShowCart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductShow />} />
            <Route path="/fruit" element={<Fruit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
            <Route path="/admin" element={<AdminNavbar />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}