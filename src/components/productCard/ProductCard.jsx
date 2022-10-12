import React from "react";
import "../productCard/product-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/basketSlice";
function ProductCard({
    thumbnail,
    price,
    title,
    id,
    description,
    rating,
    product,
}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        //add to basket
        dispatch(addToCart(product));
    };

    const currentPrice = () =>{
      return (
        Math.round(product?.price - (product?.price * product?.discountPercentage) / 100)
      )
    } 
    const getRating = (rating) => {
        if (rating > 4 && rating < 4.5) {
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
        if (rating > 4.5 && rating < 5) {
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
    return (
        <>
            <div className="col-md-6">
                <img
                    className="card-img-top mb-5 mb-md-0 card__image"
                    src={thumbnail}
                    alt="product"
                />
            </div>
            <div className="col-md-6">
                <div className="small mb-1">SKU: {id}</div>
                <h1 className="display-5 fw-bolder">{title}</h1>
                <div className="d-flex justify-content-start small text-warning mb-2">
                    {getRating(rating)}
                </div>
                <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through product__old-price">{price}$</span>
                    <span className="product__current-price">{currentPrice()}$</span>{' '}
                    <span className="product__discount">{Math.round(product?.discountPercentage)}%</span>
                </div>
                <p className="lead">{description}</p>
                <div className="d-flex">
                    <input
                        className="form-control text-center me-3"
                        id="inputQuantity"
                        type="num"
                        value="1"
                        style={{ maxWidth: "3rem" }}
                    />
                    <button
                        className="add-basket btn btn-outline-dark flex-shrink-0"
                        type="button"
                        onClick={handleClick}
                    >
                        Add to cart{' '}
                        <FontAwesomeIcon icon={faBasketShopping}/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
