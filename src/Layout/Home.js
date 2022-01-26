import React from "react";
import homepageBackground from "../Images/homepageBackground.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section class="dnow-regionsWrap">
        <div class="dnow-regionsContent">
          <div class="card bg-dark text-white">
            <img src={homepageBackground} alt="" />
            <div class="overlay-div"></div>
            <div class="card-img-overlay d-flex align-items-center container">
              <div class="row  mb-5">
                <div class=" col-sm-12 text-content">
                  <h2 class="card-title ">Delivered Straight To You</h2>
                  <p class="overlay-text">
                    Fast and easy! Give it a try today!
                  </p>
                  <button
                    onClick={() => navigate("/categories")}
                    class="btn btn-warning"
                  >
                    Browse our Categories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
