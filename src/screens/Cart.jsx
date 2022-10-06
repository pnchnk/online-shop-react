import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Card from "../components/shoppingCartCard/Card";
import MyContext from "../context/MyContext";
import Footer from "../components/footer/Footer";

function Cart() {
    const { cart } = useContext(MyContext);

    console.log(cart);
    return (
        <>
        <Header title={"Shopping cart"}/>
            <section className="section-js hidden py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                        <div className="product-in-cart-box">
                            {cart?.map((product) => {
                                return (
                                    <Card key={`shopping-cart${product.id}`} images={product.images} title={product.title} price={product.price}/>
                                )
                            })}
                        </div>                  
                </div>
            </section>
        <Footer/>    
        </>
    );
}

export default Cart;
