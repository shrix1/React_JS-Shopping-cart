import "./App.css";
import Nav from "./Nav";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div>
      {/* <BrowserRouter> */} <Nav />
      {/* <Routes> */}
      {/* <Route path="/" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
