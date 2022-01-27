import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Home from "./Home";
import Categories from "./Categories";
import About from "./About";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";

function Layout() {
  return (
    <>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgottenpassword" element={<ForgotPassword />} />
      </Switch>
    </>
  );
}

export default Layout;
