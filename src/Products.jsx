import Card from "./Card";
import { useContext } from "react";
import Appcontext from "./Context";

const Products = () => {
  const { value } = useContext(Appcontext);
  const products = [
    {
      name: "Tshirt",
      price: "100 ",
      _id: 0,
    },
    {
      name: "Shirt",
      price: "200 ",
      _id: 1,
    },
    {
      name: "Vest",
      price: "300 ",
      _id: 2,
    },
    {
      name: "Pant",
      price: "400 ",
      _id: 3,
    },
    {
      name: "Inner Wear",
      price: "500 ",
      _id: 4,
    },
    {
      name: "shorts",
      price: "600 ",
      _id: 5,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap md:w-[750px]  lg:w-[1000px] m-auto font-bold">
        {/* {search} */}
        {products
          .filter((prod) => {
            if (value === "") {
              return prod;
            } else if (value.toLowerCase().includes(prod.name.toLowerCase())) {
              return prod;
            }
          })
          .map((p, index) => (
            <Card name={p.name} key={index} price={p.price} _id={p._id} />
          ))}
      </div>
    </>
  );
};

export default Products;
