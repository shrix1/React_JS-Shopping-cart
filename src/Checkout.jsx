import { React, useContext } from "react";
import Appcontext from "./Context";

const Checkout = () => {
  const { items } = useContext(Appcontext);

  return (
    <>
      <h1 className="text-2xl text-center">Checkout bro </h1>

      {items.map((item, index) => (
        <div className=" text-2xl flex justify-center" key={index}>
          <h1>{item.name}</h1> --
          <h1>{item.price}INR</h1>
        </div>
      ))}
    </>
  );
};

export default Checkout;
