import React, {useEffect, useMemo, useState} from 'react'
import { useSelector } from "react-redux";
import Header from '../components/header/Header'
import Card from '../components/card/Card';
import { useGetAllProductsQuery } from '../store/api/products';
import Footer from '../components/footer/Footer';

function Main() {

  const products = useSelector(state=> state.products.products);

  useGetAllProductsQuery();

  const mainProducts = Array.from(products);

  const [sort, setSort] = useState("relevance");

  const onSelect = (e) => {
    setSort(e.target.value);
};

const sorted = useMemo(() => {
    if (sort === "relevance") {
        return mainProducts?.sort((a, b) => b.rating - a.rating);
    } else if (sort === "low-high") {
        return mainProducts.sort(
            (a, b) =>
                Math.round(
                    a.price - (a.price * a.discountPercentage) / 100
                ) -
                Math.round(b.price - (b.price * b.discountPercentage) / 100)
        );
    } else if (sort === "high-low") {
        return mainProducts.sort(
            (a, b) =>
                Math.round(
                    b.price - (b.price * b.discountPercentage) / 100
                ) -
                Math.round(a.price - (a.price * a.discountPercentage) / 100)
        );
    }
}, [sort]);

  return (
    <>
        <Header title={"Nikita Shop"}/>
        <div className="container px-4 px-lg-5 mt-5">
        <div className="products__sort mb-3">
                Sort by :{" "}
                <select value={sort} onChange={onSelect} aria-label="Default select example">
                    <option selected value={"relevance"}>
                        Relevance
                    </option>
                    <option value={"low-high"}>Price: low to high</option>
                    <option value={"high-low"}>Price: high to low</option>
                </select>
            </div>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
               sorted?.map(item => {
                  return(
                    <Card id={item.id} key={item.id} thumbnail={item.thumbnail} price={item.price} title={item.title} product={item} stock={item.stock}/>
                  )              
               })
            }
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Main