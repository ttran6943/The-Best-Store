import React from "react";
import animationStyles from "../Components/animationStyles";
import { StyleRoot } from "radium";

function Categories() {
  return (
    <StyleRoot>
      <div class="container" style={animationStyles.fadeIn}>
        <div class="row">
          <div class="col-4">
            <h2>Men's Clothing</h2>
          </div>
          <div class="col-4">
            <h2>Women's Clothing</h2>
          </div>
          <div class="col-4">
            <h2>Home Furniture</h2>
          </div>
          <div class="col-4">
            <h2>Appliances</h2>
          </div>
          <div class="col-4">
            <h2>Electronics</h2>
          </div>
          <div class="col-4">
            <h2>Groceries</h2>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Categories;
