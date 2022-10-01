import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Header from "../components/header/Header";
import ProductCard from "../components/productCard/ProductCard";

function Product() {
  const params = useParams();
  const [post, setPost] = useState([]);

  const getAProduct = () => {
    fetch(`https://dummyjson.com/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => setPost([...post, data]))
  }

  useEffect(() => {
    if (params?.id) {
      getAProduct()      
    }
  }, []);

  console.log(post)

  return (
    <>
      <Header/>
      <Container>
      <Row className="mt-5">
        {
        post?.map(item => {
          return (
           <ProductCard thumbnail={item.thumbnail} price={item.price} title={item.title} description={item.description} id={item.id} key={`product${item.id}`}/>
          );
        })
        }
      </Row>
    </Container>
    </>
    
  );
}

export default Product;