import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/basketSlice";
import MyContext from "../../context/MyContext";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Card({ thumbnail, price, title, id, product }) {
    // const {cart, addToCart} = useContext(MyContext);

    const dispatch = useDispatch();

    const handleClick = () => {
        //add to basket
        dispatch(addToCart(product));
    };

    const getRating = (product) => {
        if (product.rating > 4 && product.rating < 4.5) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                </>
            );
        }
        if (product.rating > 4.5 && product.rating < 5) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </>
            );
        }
    };

    const getSale = () => {
        if (product.discountPercentage >= 1) {
            return (
                <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                >
                    Sale
                </div>
            );
        }
        else {
          return (
            <></>
          )
        }
    };

    let currentPrice = Math.round(
        product?.price - (product?.price * product?.discountPercentage) / 100
    );

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${id}`);
    };

    return (
        <div className="col-6 col-lg-3 mb-5">
            <div className="card h-100">
               {getSale()}
                <img
                    className="card-img-top"
                    src={thumbnail}
                    alt="product"
                    onClick={handleNavigate}
                />
                <div className="card-body p-4" onClick={handleNavigate}>
                    <div className="text-center">
                        <h5 className="fw-bolder"></h5>
                        {title}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {getRating(product)}
                        </div>
                        <span className="text-decoration-line-through old-price">
                            {price}$
                        </span>{" "}
                        <span className="current-price">{currentPrice}$</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center card__btn">
                        <button
                            type="button"
                            className="btn btn-outline-dark mt-auto add-basket"
                            onClick={handleClick}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
