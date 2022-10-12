import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart, buttonPlus, buttonMinus, inputOnChange } from "../../store/slice/basketSlice";
import "../shoppingCartCard/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function Card({ images, title, price, quantity, discountPercentage, id, product }) {
    const [inputValue, setInputValue] = useState(quantity);
    const input = useRef('')
    const dispatch = useDispatch();

    const handleDelete = () => {
        //add to basket
        dispatch(deleteFromCart(product));
    };

    const addOne = () => {
        dispatch(buttonPlus(product));  
        window.location.reload(true)     
    };

    const minusOne = () => {
        dispatch(buttonMinus(product));    
        window.location.reload(true) 
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(inputOnChange({value: inputValue, product: product}))
    }

    console.log(inputValue)


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
                        <span className="text-decoration-line-through price">
                            {price}$
                        </span>{" "}
                        <span className="current-price">{currentPrice}$</span>
                    </div>
                    <div className="product-quantity gy-2">
                        <div className="cart__qty">
                            <span role="button"
                                onClick={minusOne}>-{'  '}</span>
                            <form onSubmit={handleSubmit}>
                            <input
                                className="product-quantity-input"
                                value={inputValue}
                                ref={input}
                                onChange={(e) => setInputValue(e.target.value)}
                                
                                // maxLength={product.stock}
                            />
                            </form>
                            <span
                                className="add-product-btn"
                                role="button"
                                onClick={addOne}
                            >
                             {'  '}   +
                            </span>
                        </div>
                    </div>
                </div>
                <button className="col-1 cart-item__btn-delete" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} className='cart-item__delete'/>
                </button>
            </div>
        </div>
    );
}

export default Card;
