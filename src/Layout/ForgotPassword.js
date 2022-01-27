import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";

function ForgotPassword() {
  return (
    <StyleRoot>
      <div style={animationStyles.fadeIn}>
        <p>Forgot Password</p>
      </div>
    </StyleRoot>
  );
}

export default ForgotPassword;
