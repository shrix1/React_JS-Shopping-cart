import "./App.css";
import Nav from "./Nav";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Appcontext from "./Context";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); //cart store
  const [value, setValue] = useState(""); //search

  // const [moreItems, setMoreItems] = useState(1);
  // const sameClick = (nameData) => {
  //   console.log("sameClick fn");
  //   items.map((item) => {
  //     // console.log(item.name, nameData);
  //     if (item.name === nameData) {
  //       setMoreItems((prev) => prev + 1);
  //     }
  //   });
  // };

  const addCart = (name, price, _id) => {
    setItems((prev) => {
      return [...prev, { name, price, _id }];
      // items.filter((prev) => {
      //   if (prev.name === name) {
      //     return [{ name, price, _id }];
      //   } else {
      //     return [...prev, { name, price, _id }];
      //   }
      // });
    });
  };

  const removeItems = (ids) => {
    setItems(items.filter((i) => ids !== i._id));
  };

  return (
    <>
      <div>
        <Appcontext.Provider
          value={{
            items,
            addCart,
            removeItems,
            // moreItems,
            // sameClick,
            value,
            setValue,
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
