import React from "react";
import animationStyles from "../Components/animationStyles";
import { StyleRoot } from "radium";
import { AnimationWrapper } from "react-hover-animation";

function Categories() {
  return (
    <StyleRoot>
      <div class="container" style={animationStyles.fadeIn}>
        <div class="row">
          <div class="categories-thumbnails col-4">
            <AnimationWrapper>
              <img
                src={require("../Images/mens-clothing-thumbnail.jpg")}
                alt="Men's Clothing"
              />
              <h2>Men's Clothing</h2>
            </AnimationWrapper>
          </div>

          <div class="col-4">
            <AnimationWrapper>
              <h2>Women's Clothing</h2>
            </AnimationWrapper>
          </div>
          <div class="col-4">
            <AnimationWrapper>
              <h2>Home Furniture</h2>
            </AnimationWrapper>
          </div>
          <div class="col-4">
            <AnimationWrapper>
              <h2>Appliances</h2>
            </AnimationWrapper>
          </div>
          <div class="col-4">
            <AnimationWrapper>
              <h2>Electronics</h2>
            </AnimationWrapper>
          </div>
          <div class="col-4">
            <AnimationWrapper>
              <h2>Groceries</h2>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Categories;
