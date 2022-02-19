import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import { Navigate, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <StyleRoot>
      <div class="container forgot-form-text" style={animationStyles.fadeIn}>
        <div class="row mt-5 justify-content-center">
          <h2 class="mb-4">Forgot Password</h2>
          <form class="col-3">
            <div>
              <input
                class="form-control"
                type="email"
                placeholder="E-Mail"
                aria-label="E-Mail"
              />
              <button
                class="btn btn-success mx-2 mt-3"
                type="submit"
                onClick={() => navigate("/")}
              >
                Submit
              </button>
              <button class="btn btn-warning mx-2 mt-3">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </StyleRoot>
  );
}

export default ForgotPassword;
