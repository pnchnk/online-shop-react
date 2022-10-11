import React from "react";
import CardStyle from "../shoppingCartCard/Card.css";

function Card({ images, title, price, quantity, discountPercentage }) {
  let currentPrice = Math.round(price - (price * discountPercentage) / 100);
  return (
    <div className="cart">
      <div className="cart__item">
        <div className="col-5 text-center">
          <img className="card-img" src={images[0]} alt={title} />
        </div>
        <div className="col-6 mt-2 overflow-visible">
          <h6 className="product-name">{title}</h6>
          <div>
            <span className="text-decoration-line-through price">{price}$</span>{" "}
            <span className="current-price">{currentPrice}$</span>
          </div>
          <div className="product-quantity gy-2">
            <div className="cart-item__qty">
              <span role="button">-</span>
              <input
                className="product-quantity-input"
                value={quantity}
              ></input>
              <span className="add-product-btn-${id}" role="button">
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-1 delete-card-btn">
          <i className="bi bi-trash" role="button"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
