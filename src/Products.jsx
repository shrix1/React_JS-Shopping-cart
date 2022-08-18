import Card from "./Card";

const Products = () => {
  const prod = [
    {
      name: "T-shirt",
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
  ];

  return (
    <>
      <div className="flex flex-wrap md:w-[800px]  lg:w-[1000px] m-auto font-bold">
        {prod.map((p, i) => (
          <Card name={p.name} key={i} price={p.price} _id={p._id} />
        ))}
      </div>
    </>
  );
};

export default Products;
