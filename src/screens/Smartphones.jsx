import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from '../store/api/products';
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);
  const [sort, setSort] = useState("relevance");

  const products = useSelector((state) => state.products.products);

  const {data, error, loading} = useGetAllProductsQuery();

  const filterSmartphones = () => {
    let temp = products?.filter((el) => el.category === "smartphones");
    setSmartphones([...smartphones, ...temp]);
  };

  const smartPhoneProducts = Array.from(smartphones);

  const onSelect = (e) => {
    setSort(e.target.value);
};



  useEffect(() => {
    // getProducts();
    filterSmartphones();
  }, []);

  return (
    <>
      <Header title={"Smartphones"} />
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {smartphones?.map((item) => {
            return (
              <Card
                id={item.id}
                key={`smartphone${item.id}`}
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

export default Smartphones;
