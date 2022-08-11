import "./App.css";
import Nav from "./Nav";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Cartprovider from "./Context";

function App() {
  return (
    <>
      <div>
        {/* <Cartprovider> */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        {/* </Cartprovider> */}
      </div>
    </>
  );
}

export default App;
