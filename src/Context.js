// import { React, createContext, useState } from "react";

// export const Cartcontext = createContext();

// export default function Cartprovider({ Children }) {
//   const [item, setItems] = useState([]);

//   const addCart = (name, price) => {
//     setItems((prev) => [...prev, { name, price }]);
//   };

//   return (
//     <Cartcontext.Provider value={{ item, addCart }}>
//       {Children}
//     </Cartcontext.Provider>
//   );
// }
