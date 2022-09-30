import React from "react";
import './card.css'

function Card({thumbnail, price, title }) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <a
                    className="img-link"
                    href="./product.html"
                >
                    <img
                        className="card-img-top"
                        src={thumbnail}
                        alt="product"
                    />
                </a>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder"></h5>
                            {title}
                        <div className="d-flex justify-content-center small text-warning mb-2"></div>

                        <span className="text-decoration-line-through old-price">
                            $
                        </span>
                        <span className="current-price">{price}</span>
                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center card__btn">
                        <a
                            className="btn btn-outline-dark mt-auto add-basket"
                            href="#"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
