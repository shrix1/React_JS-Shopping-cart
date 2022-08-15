import "./App.css";
import Nav from "./Nav";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Appcontext from "./Context";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [items, setItems] = useState([]);

  const addCart = (name, price) => {
    setItems((prev) => [...prev, { name, price }]);
  };

  return (
    <>
      <div>
        <Appcontext.Provider value={{ add, setAdd, items, setItems, addCart }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </Appcontext.Provider>
      </div>
    </>
  );
}

export default App;
