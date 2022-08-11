import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around p-5 bg-sky-300 font-semibold">
        <header className="text-2xl font-pop">
          <h1>Wear it</h1>
        </header>
        {/* <Link to={"/checkout"}>  </Link> */}
        <div className="flex text-xl mt-2">
          <RiShoppingCart2Fill />
          <span className="ml-3 -mt-1">0</span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
