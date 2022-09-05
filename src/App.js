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

  // const [moreItems, setMoreItems] = useState(1);
  // const sameClick = (id) => {
  //   console.log("sameClick fn");
  //   items.map((item) => {
  //     console.log(item._id, id);
  //     if (item._id === id) {
  //       setMoreItems((prev) => prev + 1);
  //     }
  //   });
  // };

  const addCart = (name, price, _id) => {
    setItems((prev) => [...prev, { name, price, _id }]);
  };

  const removeItems = (ids) => {
    setItems(items.filter((i) => ids !== i._id));
  };

  return (
    <>
      <div>
        <Appcontext.Provider
          value={{
            add,
            items,
            setAdd,
            addCart,
            removeItems,
            // moreItems,
            // sameClick,
          }}
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
