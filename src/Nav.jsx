import { React, useContext } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Appcontext from "./Context";

const Nav = () => {
  const { add } = useContext(Appcontext);

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
            <span className="ml-3 -mt-1">{add}</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
