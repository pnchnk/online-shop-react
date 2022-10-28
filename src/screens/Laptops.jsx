import React from "react";
import { useEffect, useState, useContext } from "react";
import { useGetAllProductsQuery } from '../store/api/products';
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

function Laptops() {
  const products = useSelector((state) => state.products.products);

  const {data, error, loading} = useGetAllProductsQuery();

  const [laptops, setLaptops] = useState([]);

  const filterLaptops = () => {
    let temp = products?.filter((el) => el.category === "laptops");
    setLaptops([...laptops, ...temp]);
  };

  useEffect(() => {
    filterLaptops();
  }, []);

  return (
    <>
      <Header title={"Laptops"} />
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {laptops?.map((item) => {
            return (
              <Card
                id={item.id}
                key={`laptops${item.id}`}
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
                product={item}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Laptops;
