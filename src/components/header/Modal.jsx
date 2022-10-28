import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  buttonPlus,
  buttonMinus,
  inputOnChange,
} from "../../store/slice/basketSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Modal({ item, quantity }) {
  const [inputValue, setInputValue] = useState(quantity);
  const input = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

//   const handleNavigate = () => {
//     navigate(`/cart`);
//   };

  const handleDelete = () => {
    //add to basket
    dispatch(deleteFromCart(item));
  };

  const addOne = () => {
    dispatch(buttonPlus(item));
    setInputValue(inputValue + 1)
    // window.location.reload(true);
  };

  const minusOne = () => {
    dispatch(buttonMinus(item));
    setInputValue(inputValue - 1)
    // window.location.reload(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputOnChange({ value: inputValue, product: item }));
  };
  return (
    <div className="modal-cart__item">
      <div className="col-5 text-center">
        <img className="card-img" src={item.images[0]} alt={item.title} />
        <h6 className="product-name">{item.title}</h6>
        <span className="text-decoration-line-through price">
          {item?.price * item?.quantity}$
        </span>{" "}
        <span className="current-price">
          {Math.round(
            item?.price - (item?.price * item?.discountPercentage) / 100
          ) * item?.quantity}
          $
        </span>
      </div>
      <div className="product-quantity gy-2">
        <div className="cart__qty">
          <span
            className="product-quantity__minus"
            role="button"
            onClick={minusOne}
          >
            <FontAwesomeIcon icon={faMinus} />
          </span>
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
            className="product-quantity__plus"
            role="button"
            onClick={addOne}
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <FontAwesomeIcon
          onClick={handleDelete}
          icon={faTrash}
          className="cart-item__delete"
        />
      </div>
    </div>
  );
}

export default Modal;
