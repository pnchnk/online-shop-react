import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../context/MyContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/header/Header";
import ProductCard from "../components/productCard/ProductCard";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";

function Product() {
  const params = useParams();

  const [product, setProduct] = useState();

  const [relevant, setRelevant] = useState();

  const getAProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };

  const relatedProducts = () => {
    let tempVar = new Object(product);
    fetch(`https://dummyjson.com/products/category/${tempVar.category}`)
      .then((response) => response.json())
      .then((data) => data.products.filter((item) => item.id !== tempVar.id))
      .then((filtered) => setRelevant(filtered));
  };

  useEffect(() => {
    if (params?.id) {
      getAProduct(params.id);
    }
  }, [params]);

  useEffect(() => {
    relatedProducts();  
  }, [product]);

  console.log(product);
  
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          
              <ProductCard
                thumbnail={product?.thumbnail}
                price={product?.price}
                title={product?.title}
                description={product?.description}
                id={product?.id}
                key={`product${product?.id}`}
              />
            
          
        </Row>
        <Row className="mt-5">
          <h2 className="text-center">You may also like</h2>
          {relevant?.map((item) => {
            return (
              <Card
                id={item.id}
                key={`relevant${item.id}`}
                thumbnail={item.thumbnail}
                price={item.price}
                title={item.title}
                product={item}
              />
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Product;
