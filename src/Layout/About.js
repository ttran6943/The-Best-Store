import React from "react";
import aboutimg1 from "../Images/aboutimg1.jpeg";
import aboutimg2 from "../Images/aboutimg2.jpeg";

function About() {
  return (
    <>
      <div class="container my-5">
        <div class="row mb-5">
          <div class="col-6">
            <h2>Who Are We?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis auctor elit sed vulputate.
              Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. In
              vitae turpis massa sed elementum tempus egestas. Nullam ac tortor
              vitae purus faucibus ornare suspendisse. Vivamus at augue eget
              arcu dictum varius duis at consectetur. Bibendum neque egestas
              congue quisque egestas diam in. Imperdiet nulla malesuada
              pellentesque elit eget gravida. Malesuada fames ac turpis egestas
              sed. Consectetur adipiscing elit pellentesque habitant morbi
              tristique. Faucibus nisl tincidunt eget nullam. Rhoncus est
              pellentesque elit ullamcorper dignissim. Odio aenean sed
              adipiscing diam donec adipiscing. Porttitor eget dolor morbi non
              arcu risus. Morbi tristique senectus et netus et malesuada fames
              ac. Scelerisque varius morbi enim nunc faucibus a. Pharetra et
              ultrices neque ornare aenean. Laoreet suspendisse interdum
              consectetur libero id. Scelerisque in dictum non consectetur a.
            </p>
          </div>
          <img class="col-6" src={aboutimg1} />
        </div>
        <div class="row">
          <img class="col-6" src={aboutimg2} />
          <div class="col-6">
            {" "}
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis auctor elit sed vulputate.
              Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. In
              vitae turpis massa sed elementum tempus egestas. Nullam ac tortor
              vitae purus faucibus ornare suspendisse. Vivamus at augue eget
              arcu dictum varius duis at consectetur. Bibendum neque egestas
              congue quisque egestas diam in. Imperdiet nulla malesuada
              pellentesque elit eget gravida. Malesuada fames ac turpis egestas
              sed. Consectetur adipiscing elit pellentesque habitant morbi
              tristique. Faucibus nisl tincidunt eget nullam. Rhoncus est
              pellentesque elit ullamcorper dignissim. Odio aenean sed
              adipiscing diam donec adipiscing. Porttitor eget dolor morbi non
              arcu risus. Morbi tristique senectus et netus et malesuada fames
              ac. Scelerisque varius morbi enim nunc faucibus a. Pharetra et
              ultrices neque ornare aenean. Laoreet suspendisse interdum
              consectetur libero id. Scelerisque in dictum non consectetur a.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
