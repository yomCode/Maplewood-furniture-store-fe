import { Empty } from "antd";
import { useEffect } from "react";
import { useAuth } from "../context/authcontext";
import Card from "./Card/Card";

const ProductOverview = () => {
  const { NewArrival, newArrival } = useAuth();

  useEffect(() => {
    NewArrival();
    // eslint-disable-next-line
  }, []);

  const dummyProducts = [
    {
      id: 1,
      name: "WOODEN",
      imageUrl:
        "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/92DNEPD@2x-300x300.jpg",
    },
    {
      id: 2,
      name: "SOFA",
      imageUrl:
        "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/4PHLD2@2x-300x300.jpg",
    },
    {
      id: 3,
      name: "CUPBOARD",
      imageUrl:
        "https://th.bing.com/th/id/R.283fb4960158a3608b8b2fbb553d10ab?rik=74UYA0mjX3VG1g&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div className="max-w-[90%] mt-[-30px] p-4 bg-white mx-auto">
      <div className="flex flex-wrap gap-[2rem] justify-center">
        {newArrival.length > 0 ? (
          newArrival.map((product) => (
            <Card
              title="NEW ARRIVAL"
              pName={product.name}
              image={product.imageUrl}
              id={product.id}
            />
          ))
        ) : dummyProducts?.length > 0 ? (
          dummyProducts.map((product) => (
            <Card
              title="NEW ARRIVAL"
              pName={product.name}
              image={product.imageUrl}
              id={product.id}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default ProductOverview;
