import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Card from "../components/shoppingCartCard/Card";
import Footer from "../components/footer/Footer";

function Cart() {
    const basket = useSelector(state=> state.basket.basketItems);

    //let totalQuantity = basket?.reduce((acc, item)=> acc += item.quantity, 0);
    //let currentPrice = basket?.reduce((acc, item)=> acc + item.price, 0);

    

    const navigate = useNavigate()
       
    const handleNavigate = () => {
        navigate(`/`);
    };

    return (
        <>
            <Header title={"Shopping cart"} />
            <section className="section-js hidden py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5" style={{minHeight:"41vh"}}>
                {!basket.length && <div className="empty-cart">Your cart is empty. Go to <span onClick={handleNavigate} style={{fontWeight:"bold", cursor:"pointer"}}>Main Page{" "}</span>to continue shopping.</div>}
                    {basket?.map((product, index) => {
                        return (
                            <Card
                                key={`shopping-cart${index}`}
                                images={product?.images}
                                title={product?.title}
                                price={product?.price}
                                discountPercentage={product?.discountPercentage}
                                quantity={product?.quantity}
                                id={product?.id}
                                product={product}
                            />
                        );
                    })}
                  <div>
                    {/* Total price: */}
                  </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Cart;
