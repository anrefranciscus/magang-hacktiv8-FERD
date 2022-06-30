import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" exact element={<ProductPage/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
