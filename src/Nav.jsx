import { React, useContext } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Appcontext from "./Context";

const Nav = () => {
  const { value, setValue, items } = useContext(Appcontext);

  return (
    <>
      <main
        className="flex flex-col bg-sky-300 h-[120px] 
      lg:flex-row lg:justify-around lg:items-center"
      >
        <nav
          className="flex justify-around lg:justify-between 
        p-5 font-semibold"
        >
          <header className="text-2xl font-pop">
            <Link to={"/"}>
              <h1>Wear it</h1>
            </Link>
          </header>
          <Link to={"/checkout"}>
            <div className="flex text-xl mt-2 lg:ml-10">
              <RiShoppingCart2Fill />
              <span className="ml-3 -mt-1">{items.length}</span>
            </div>
          </Link>
        </nav>
        <section className="text-center lg:text-justify">
          <input
            type="text"
            placeholder="search"
            className="p-1 font-pop border w-[200px] m-auto
            rounded border-sky-500 outline-none hover:border-black"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </section>
      </main>
    </>
  );
};

export default Nav;
