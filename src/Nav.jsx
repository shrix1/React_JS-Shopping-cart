import { React, useContext } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Cartcontext } from "./Context";

const Nav = () => {
  // const { item } = useContext(Cartcontext);

  return (
    <>
      <nav className="flex justify-around p-5 bg-sky-300 font-semibold">
        <header className="text-2xl font-pop">
          <Link to={"/"}>
            <h1>Wear it</h1>
          </Link>
        </header>
        <Link to={"/checkout"}>
          <div className="flex text-xl mt-2">
            <RiShoppingCart2Fill />
            <span className="ml-3 -mt-1">0</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
