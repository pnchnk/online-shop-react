import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  buttonPlus,
  buttonMinus,
  inputOnChange,
} from "../../store/slice/basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Modal({ item, quantity }) {
  const [inputValue, setInputValue] = useState(quantity);
  const input = useRef("");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromCart(item));
  };

  const addOne = () => {
    dispatch(buttonPlus(item));
    setInputValue(inputValue + 1);
  };

  const minusOne = () => {
    dispatch(buttonMinus(item));
    setInputValue(inputValue - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputOnChange({ value: inputValue, product: item }));
  };
  return (
    <div className="modal-cart__item">
      <div className="col-5 text-center">
        <h6 className="modal-cart__product-name">{item.title}</h6>
        <img className="modal-card-img" src={item.images[0]} alt={item.title} />
        <span className="text-decoration-line-through price">
          {item?.price * item?.quantity}$
        </span>{" "}
        <span className="modal-cart__current-price">
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
      </div>
      <div className="product__delete">
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
