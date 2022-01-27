import React from "react";
import icon from "../Images/icon.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <div class="container">
              <div class="row">
                <img src={icon} class="col header-icon" alt="best shop icon" />
                <h1 class="col header-title">The Best Store</h1>
              </div>
            </div>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/categories">
                  Categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/new">
                  New Items
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search products"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              class="m-2 btn btn-secondary"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
