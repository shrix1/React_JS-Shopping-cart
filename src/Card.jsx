import React from "react";
import { useContext } from "react";
import Appcontext from "./Context";
import { RiTShirt2Line } from "react-icons/ri";
import { useState } from "react";
// import { products } from "./Mainproducts";

const Card = (props) => {
  const { addCart, removeItems } = useContext(Appcontext);
  const [btn, setBtn] = useState(false); //issues in it

  const addingItems = (ids) => {
    addCart(props.name, props.price, props._id);
    setBtn(true);
    // products.map((i) => i._id === ids && [...i, { isAdd: !i.isAdd }]);
    // console.log(products);
  };

  const removingItems = () => {
    removeItems(props._id);
    setBtn(false);
  };

  return (
    <>
      <section
        className="mt-8 flex font-pop p-2
      border border-sky-900 rounded m-auto"
      >
        <div className="w-[130px] bg-sky-300 rounded">
          <RiTShirt2Line
            className="text-9xl text-gray-900"
            title={props.name + " is $" + props.price}
          />
        </div>
        <div className="flex justify-between flex-col ml-5">
          <div>
            <h1>{props.name}</h1>
            <h1>$ {props.price}</h1>
          </div>

          {btn ? (
            //reomve
            <button
              className="p-1.5 w-[110px]
             bg-sky-500 rounded hover:bg-sky-200"
              onClick={() => removingItems(props._id)}
              title="remove"
            >
              remove
            </button>
          ) : (
            //add
            <button
              className="p-1.5 w-[110px]
             bg-sky-200 rounded hover:bg-sky-500"
              onClick={() => addingItems(props._id)}
              title="add to cart"
            >
              Add to cart
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Card;
