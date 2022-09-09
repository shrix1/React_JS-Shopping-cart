import { React, useContext } from "react";
import { RiShoppingCart2Fill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Appcontext from "./Context";

const Nav = () => {
  const { value, setValue, items } = useContext(Appcontext);

  return (
    <>
      <main
        className="flex flex-col bg-sky-300 h-[90px] 
      lg:flex-row lg:justify-around lg:items-center mb-4"
      >
        {/* navContent */}
        <nav
          className="flex justify-around lg:justify-between 
        p-5 font-semibold"
        >
          <header className="text-2xl font-pop">
            <Link to={"/"}>
              <h1 title="home">Wear it</h1>
            </Link>
          </header>

          <Link to={"/checkout"}>
            <div className="flex text-xl mt-2 lg:ml-10" title="checkout cart">
              <RiShoppingCart2Fill />
              <span className="ml-3 -mt-1">{items.length}</span>
            </div>
          </Link>
        </nav>

        {/* .search */}
        <section className="text-center lg:text-justify flex">
          <input
            type="text"
            placeholder="search"
            className="p-1 font-pop border-2 w-[200px] m-auto
            rounded-md border-sky-300 outline-none hover:border-gray-500
            pr-3 "
            onChange={(e) => setValue(e.target.value)}
            value={value}
            title="search items"
          />

          <RiSearch2Line
            className="absolute lg:right-[390px]
          right-[160px] mt-[9px] text-gray-600"
          />
        </section>
      </main>
    </>
  );
};

export default Nav;
