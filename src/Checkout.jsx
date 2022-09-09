import { React, useContext } from "react";
import Appcontext from "./Context";
import { RiTShirt2Line } from "react-icons/ri";

const Checkout = () => {
  const { items, removeItems } = useContext(Appcontext);

  return (
    <>
      <h1 className="text-2xl text-center font-pop font-bold mt-9 lg:mb-9">
        Checkout here
      </h1>

      <main
        className="lg:flex lg:justify-evenly lg:mt-[14px] gap-2 
      flex-row-reverse"
      >
        {/* payment */}
        <section
          className="text-center font-pop lg:border-2 border-sky-200
        lg:w-[400px] //lg:h-[700px] rounded-md flex flex-col items-center 
        justify-center"
        >
          <h1 className="text-center text-2xl mt-6">
            Total price is{" "}
            <span className="underline font-bold">
              $
              {items.reduce((acc, curr) => {
                return acc + curr.price;
              }, 0)}
            </span>
          </h1>
          <button
            className="p-1 bg-sky-500 rounded hover:bg-sky-200 
            mt-5 text-xl w-[120px] h-[35px] font-semibold leading-tight
             tracking-wide
            "
          >
            Pay now
          </button>
        </section>

        {/* cartList */}
        <div
          className="lg:flex justify-between gap-1 flex-wrap lg:max-h-[1000px]
        lg:border-2 border-sky-200 lg:w-[1000px] rounded-md 
        lg:min-h-[700px]"
        >
          {items.length === 0 ? (
            <h1
              className="text-2xl font-pop mt-4 font-light flex items-center 
            justify-center lg:w-[1000px]"
            >
              Your cart is&nbsp;
              <span className="font-bold underline">empty</span>
            </h1>
          ) : (
            items.map((item, index) => {
              return (
                <section
                  className="mt-8 flex font-pop p-2
                border border-sky-900 rounded m-auto w-[250px]"
                  key={index}
                >
                  <div className="w-[130px] bg-sky-300 rounded">
                    <RiTShirt2Line className="text-9xl" title={item.name} />
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
                      }}
                      title="remove item"
                    >
                      remove
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
      </main>
    </>
  );
};

export default Checkout;
