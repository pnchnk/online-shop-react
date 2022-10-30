import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cleanCart
} from "../store/slice/basketSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Card from "../components/shoppingCartCard/Card";
import Footer from "../components/footer/Footer";
import Modal from "../components/modalSuccessfull/Modal";

function Cart() {
  const basket = useSelector((state) => state.basket.basketItems);

  const [modalWindow, setModalWindow] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    setModalWindow(false);
    dispatch(cleanCart())
  }

  return (
    <>
      <Header title={"Shopping cart"} />
      <section className="section-js hidden py-5 bg-light position-relative">
        <div
          className="container px-4 px-lg-5 mt-1"
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
              <button className="btn btn-outline-dark text-center" type="button" onClick={() => setModalWindow(true)}>
                    Place order.
              </button>
              </>
            )}
          </div>
          {
            !modalWindow ? null : (
              <Modal closeModal={handleClose}/>
            )
          }
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
