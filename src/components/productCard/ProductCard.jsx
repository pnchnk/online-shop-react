import React from "react";

function ProductCard({thumbnail, price, title, id, description}) {
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
        <div className="fs-5 mb-5">
          <span className="text-decoration-line-through">$</span>
          <span>{price}$</span>
        </div>
        <p className="lead">{description}</p>
        <div className="d-flex">
          <input
            className="form-control text-center me-3"
            id="inputQuantity"
            type="num"
            value="1"
            style={{maxWidth: "3rem"}}
          />
          <button
            className="add-basket btn btn-outline-dark flex-shrink-0"
            type="button"
          >
            {/* <i className="bi-cart-fill me-1"></i> */}
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
