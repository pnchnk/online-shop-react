import React from "react";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/index.html">
          Main Page
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/index.html">
                    All Products
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/smarthpones.html">
                    Smartphones
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/laptops.html">
                    Laptops
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="dropdown-button position-relative">
            <form class="d-flex">
              <button id="crt-btn" class="btn btn-outline-dark" type="button">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="js-amount badge bg-dark text-white ms-1 rounded-pill d-none">
                  0
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
