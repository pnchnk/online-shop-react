import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
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

    const relatedProducts = async () => {
        let tempVar = new Object(product);
        try{
            const res = await  fetch(`https://dummyjson.com/products/category/${tempVar.category}`)
            const responce = await res.json()
            const data = await responce.products.filter((item) => item.id !== tempVar.id)
            if(data?.length > 3){
                data?.pop()
            }
            setRelevant(data)
           
        } catch(err){
            throw new Error
        }                  
    };

    useEffect(() => {
        if (params?.id) {
            getAProduct(params.id);
        }
    }, [params]);

    useEffect(() => {
        relatedProducts();
    }, [product]);

    return (
        <>
            <Header title={product?.title}/>
            <Container>
                <Row className="mt-5 product-card ">
                    <ProductCard
                        thumbnail={product?.thumbnail}
                        price={product?.price}
                        title={product?.title}
                        description={product?.description}
                        id={product?.id}
                        rating={product?.rating}
                        product={product}
                        key={`product${product?.id}`}
                    />
                </Row>
                <Row className="mt-5 justify-content-center">
                    <h3 className="text-center">You may also like</h3>
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
