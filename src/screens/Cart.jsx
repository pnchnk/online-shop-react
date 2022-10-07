import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Card from "../components/shoppingCartCard/Card";
import MyContext from "../context/MyContext";
import Footer from "../components/footer/Footer";

function Cart() {
    const { cart } = useContext(MyContext);

    const navigate = useNavigate()
       
    const handleNavigate = () => {
        navigate(`/`);
    };

    return (
        <>
            <Header title={"Shopping cart"} />
            <section className="section-js hidden py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5" style={{minHeight:"41vh"}}>
                {!cart.length && <div className="empty-cart">Your cart is empty. Go to <span onClick={handleNavigate} style={{fontWeight:"bold", cursor:"pointer"}}>Main Page{" "}</span>to continue shopping.</div>}
                    {cart?.map((product, index) => {
                        return (
                            <Card
                                key={`shopping-cart${index}`}
                                images={product.images}
                                title={product.title}
                                price={product.price}
                                quantity={localStorage.getItem( `product${product.id}`)}
                            />
                        );
                    })}
                   
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Cart;
