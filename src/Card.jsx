import React from "react";
import { useContext } from "react";
import Appcontext from "./Context";
import { RiTShirt2Line } from "react-icons/ri";

const Card = (props) => {
  const {
    addCart,
    //  sameClick
  } = useContext(Appcontext);

  return (
    <>
      <section
        className="mt-8 flex font-pop p-2
      border border-sky-900 rounded m-auto"
      >
        <div className="w-[130px] bg-sky-300 rounded">
          <RiTShirt2Line className="text-9xl" />
        </div>
        <div className="flex justify-between flex-col ml-5">
          <div>
            <h1>{props.name}</h1>
            <h1>$ {props.price}</h1>
            {/* <h1>{props._id}</h1> */}
          </div>
          <button
            className="p-1.5
          bg-sky-200 rounded hover:bg-sky-500"
            onClick={() => {
              addCart(props.name, props.price, props._id);
            }}
          >
            Add to cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
