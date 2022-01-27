import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";

function SignIn() {
  return (
    <StyleRoot>
      <div class="container sign-in-page" style={animationStyles.fadeIn}>
        <div class="row mt-5 justify-content-center">
          <h2 class="mb-4">Sign In</h2>
          <form class="col-3">
            <div class="row">
              <p class="mb-3">
                Don't have an account? <a href="#">Sign Up!</a>
              </p>
            </div>
            <div>
              <input
                class="form-control"
                type="email"
                placeholder="E-Mail"
                aria-label="E-Mail"
              />
              <input
                class="form-control mt-3 mb-2"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
              <div class="row">
                <p class="mb-3">
                  <a href="/forgottenpassword">Forgot Password</a>
                </p>
              </div>
              <div></div>
              <button class="btn btn-success mx-2" type="submit">
                Login
              </button>
              <button class="btn btn-warning mx-2">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </StyleRoot>
  );
}

export default SignIn;
