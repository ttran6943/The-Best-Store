import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Home from "./Home";
import Categories from "./Categories";
import About from "./About";

function Layout() {
  return (
    <>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Switch>
    </>
  );
}

export default Layout;
