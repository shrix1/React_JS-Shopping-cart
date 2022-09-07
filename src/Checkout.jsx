import { React, useContext } from "react";
import Appcontext from "./Context";
import { RiTShirt2Line } from "react-icons/ri";

const Checkout = () => {
  // const [cost, setCost] = useState();

  const {
    items,
    // setAdd,
    removeItems,
    // moreItems,
  } = useContext(Appcontext);

  return (
    <>
      <h1 className="text-2xl text-center font-pop font-bold mt-4">
        Checkout here
      </h1>
      {items.length === 0 ? (
        <h1 className="text-2xl text-center font-pop mt-4">
          Your cart is <span className="font-bold underline">empty</span>
        </h1>
      ) : (
        <h1 className="text-2xl text-center font-pop mt-4">
          your cart has{" "}
          <span className="text-2xl text-center font-pop font-bold">
            {items.length}
          </span>{" "}
          items
        </h1>
      )}

      {items.map((item, index) => {
        return (
          <section
            className="mt-8 flex font-pop  p-2
      border border-sky-900 rounded m-auto w-[250px]"
            key={index}
          >
            <div className="w-[130px] bg-sky-300 rounded">
              <RiTShirt2Line className="text-9xl" />
            </div>
            <div className="flex justify-between flex-col ml-5 ">
              <div className="font-bold">
                <h1>{item.name}</h1>
                <h1>$ {item.price}</h1>
                {/* <h1>{item._id} </h1> */}
              </div>
              <button
                className="p-1.5 bg-sky-200 rounded hover:bg-sky-500 
              font-bold"
                onClick={() => {
                  removeItems(item._id);
                  // setAdd((p) => p - 1);
                }}
              >
                remove
              </button>
            </div>
          </section>
        );
      })}

      <h1 className="text-center text-2xl font-pop mt-6">
        Total price is{" "}
        <span className="underline font-bold">
          $
          {items.reduce((acc, curr) => {
            return acc + curr.price;
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default Checkout;
