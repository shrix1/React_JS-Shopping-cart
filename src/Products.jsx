import Card from "./Card";
import { useContext } from "react";
import Appcontext from "./Context";
import { products } from "./Mainproducts";

const Products = () => {
  const { value } = useContext(Appcontext);

  return (
    <>
      <div className="flex flex-wrap md:w-[750px]  lg:w-[1000px] m-auto font-bold">
        {/* {search} */}
        {products
          .filter((prod) => {
            if (value === "") {
              return prod;
            } else if (
              value
                .toLowerCase()
                .replaceAll(" ", "")
                .includes(prod.name.toLowerCase().replaceAll(" ", ""))
            ) {
              return prod;
            }
          })
          .map((p, index) => (
            <Card
              name={p.name}
              key={index}
              price={p.price}
              _id={p._id}
              isAdd={p.isAdd}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
