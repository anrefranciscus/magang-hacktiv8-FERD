import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
