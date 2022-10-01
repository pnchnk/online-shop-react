import React from "react";
import './card.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

function Card({thumbnail, price, title, id, product }) {

    const getRating = (product) => {
        if (product.rating > 4 && product.rating < 4.5) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalf}/>                    
                </>
            )
        }
        if (product.rating > 4.5 && product.rating < 5) {
            return (
                <>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </>
            )
        }
    };

    return (
        <Link to={`${id}`}>
            <div className="col mb-5">
            <div className="card h-100">
                <a
                    className="img-link"
                    
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
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {
                                getRating(product)
                            }
                        </div>
    
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
        </Link>
    );
}

export default Card;
