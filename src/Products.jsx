import Card from "./Card";

const Products = () => {
  const prod = [
    {
      name: "T-shirt",
      price: "100 ",
    },
    {
      name: "Shirt",
      price: "200 ",
    },
    {
      name: "Vest",
      price: "300 ",
    },
    {
      name: "Pant",
      price: "400 ",
    },
    {
      name: "Inner Wear",
      price: "500 ",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap md:w-[800px]  lg:w-[1000px] m-auto font-bold">
        {prod.map((p, k) => (
          <Card name={p.name} key={k} price={p.price} />
        ))}
      </div>
    </>
  );
};

export default Products;
