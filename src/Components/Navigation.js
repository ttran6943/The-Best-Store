import React from "react";

function Navigation() {
  return (
    <>
      <div class="topnav">
        <nav class="navbar navbar-dark bg-dark justify-content-end">
          <a class="navbar-brand mx-2" href="#">
            My Account
          </a>
          <a class="navbar-brand mx-2" href="#">
            Shop
          </a>
          <a class="navbar-brand mx-2" href="#">
            Wish List
          </a>
          <a class="navbar-brand mx-2" href="#">
            Shop
          </a>
          <button class="navbar-brand btn btn-success mx-4" href="#">
            Checkout
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
