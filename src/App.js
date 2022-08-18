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

  const addCart = (name, price, _id) => {
    setItems((prev) => [...prev, { name, price, _id }]);
    console.log("in add  card");
  };

  console.log(items);

  const removeCart = (ids) => {
    console.log(ids);
    items.filter((i) => {
      console.log(i._id);
      return ids !== i._id;
    });
    console.log("in remove card");
  };

  return (
    <>
      <div>
        <Appcontext.Provider
          value={{ add, setAdd, items, addCart, removeCart }}
        >
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
