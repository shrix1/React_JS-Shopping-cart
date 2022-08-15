import { React, useContext } from "react";
import Appcontext from "./Context";

const Checkout = () => {
  const { name, price } = useContext(Appcontext);
  return (
    <>
      <h1>Checkout bro </h1>
      {name.map((e) => {
        return <h1>{e}</h1>;
      })}
      {price.map((e) => {
        return <h1>{e}INR</h1>;
      })}
    </>
  );
};

export default Checkout;
