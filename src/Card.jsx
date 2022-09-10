import React from "react";
import { useContext, useState } from "react";
import Appcontext from "./Context";
import { RiTShirt2Line } from "react-icons/ri";

const Card = (props) => {
  const { addCart, removeItems } = useContext(Appcontext);
  const [cart, setCart] = useState(localStorage.getItem("cart"));

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
            {/* <h1>{props._id}</h1> */}
          </div>

          {cart ? (
            <button
              className="p-1.5 w-[110px]
          bg-sky-200 rounded hover:bg-sky-500"
              onClick={() => {
                addCart(props.name, props.price, props._id);
                localStorage.setItem("cart", false);
                setCart(false);
              }}
              title="add to cart"
            >
              Add to cart
            </button>
          ) : (
            <button
              className="p-1.5 w-[110px]
          bg-sky-500 rounded hover:bg-sky-200"
              onClick={() => {
                removeItems(props._id);
                localStorage.setItem("cart", true);
                setCart(true);
              }}
              title="remove"
            >
              remove
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Card;
