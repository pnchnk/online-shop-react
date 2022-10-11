import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    const basket = useSelector(state=> state.basket?.basketItems)
    const totalPrice = basket?.reduce((acc, item)=> acc += item.price, 0)

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/cart`);
        // window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to={"/"}>
                    Main Page
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/"}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                href=""
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link className="dropdown-item" to={"/"}>
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"/smartphones/"}
                                    >
                                        Smartphones
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={"/laptops"}
                                    >
                                        Laptops
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="dropdown-button position-relative">
                        <form className="d-flex">
                            <button
                                id="crt-btn"
                                className="btn btn-outline-dark"
                                type="button"
                                onClick={handleNavigate}
                                disabled={!basket.length}
                            >
                                Cart <FontAwesomeIcon icon={faCartShopping} />
                                <span className="js-amount badge bg-dark text-white ms-1 rounded-pill">
                                    {basket.length}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
