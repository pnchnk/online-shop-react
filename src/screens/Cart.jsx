import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Card from "../components/shoppingCartCard/Card";
import Footer from "../components/footer/Footer";

function Cart() {
  const basket = useSelector((state) => state.basket.basketItems);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <>
      <Header title={"Shopping cart"} />
      <section className="section-js hidden py-5 bg-light">
        <div
          className="container px-4 px-lg-5 mt-5"
          style={{ minHeight: "41vh" }}
        >
          {!basket.length && (
            <div className="empty-cart">
              Your cart is empty. Go to{" "}
              <span
                onClick={handleNavigate}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Main Page{" "}
              </span>
              to continue shopping.
            </div>
          )}
          <div className="basket-smth">
          {basket.map((product) => {
            return <Card
                key={`shopping-cart${product?.id}`}
                images={product?.images}
                title={product?.title}
                price={product?.price}
                discountPercentage={product?.discountPercentage}
                quantity={product?.quantity}
                id={product?.id}
                product={product}
              />;           
          })}
          </div>
          <div className="cart-actions">
            {!basket.length ? null : (
                <>
              <span className="cart__total-price">Total Price:{"  "}
              {
                 basket.reduce(
                    (acc, item) =>
                      Math.floor(
                        (acc +=
                          (item?.price -
                            (item?.price * item?.discountPercentage) / 100) *
                          item?.quantity)
                      ),
                    1
                  )
              }$
              </span>
              <button type="submit">
                    Buy
              </button>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
