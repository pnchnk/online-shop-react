import React from "react";
import CardStyle from "../shoppingCartCard/Card.css";

function Card({ images, title, price }) {
    return (
        <div className="row">
            <div className="cart__item">
                <div className="col-5 text-center">
                    <img className="card-img" src={images[0]} alt={title} />
                </div>
                <div className="col-6 mt-2 text-center overflow-visible">
                    <h6 className="product-name">${title}</h6>
                    <div className="text-center">
                        <span className="price">$${price}</span>
                    </div>
                    <div className="product-quantity gy-2">
                        <div className="cart-item__qty text-center">
                            <span role="button">-</span>
                            <input
                                className="product-quantity-input"
                                value="${quantity}"
                            ></input>
                            <span
                                className="add-product-btn-${id}"
                                role="button"
                            >
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
