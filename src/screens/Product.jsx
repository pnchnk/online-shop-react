import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from '../store/api/products';
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/header/Header";
import ProductCard from "../components/productCard/ProductCard";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";

function Product() {
    const params = useParams();

    const products = useSelector((state) => state.products.products);

    const { data, error, isLoading } = useGetProductQuery(params?.id)

   

    //const [product, setProduct] = useState();

    const [relevant, setRelevant] = useState();

    console.log(relevant)

    // const getAProduct = (id) => {
    //     fetch(`https://dummyjson.com/products/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => setProduct(data));
    // };

    const relatedProducts = (product) => {
        //let tempVar = new Object(product);
        let temp = products?.filter((el) => el.category === product?.category && el?.id !== product?.id);
        if (temp.length > 3 ) {
            temp.pop()
            setRelevant(temp)
        }
    };

    // useEffect(() => {
    //     if (params?.id) {
    //         getAProduct(params.id);
    //     }
    // }, [params]);

    useEffect(() => {
        relatedProducts(data);
    }, [data]);

    return (
        <>
            <Header title={data?.title}/>
            <Container>
                <Row className="mt-5 product-card ">
                    <ProductCard
                        thumbnail={data?.thumbnail}
                        price={data?.price}
                        title={data?.title}
                        description={data?.description}
                        id={data?.id}
                        rating={data?.rating}
                        product={data}
                        key={`product${data?.id}`}
                    />
                </Row>
                <Row className="mt-5 justify-content-center">
                    <h3 className="text-center">You may also like</h3>
                    {relevant?.map((item) => {
                        return (
                            <Card
                                id={item?.id}
                                key={`relevant${item?.id}`}
                                thumbnail={item?.thumbnail}
                                price={item?.price}
                                title={item?.title}
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
