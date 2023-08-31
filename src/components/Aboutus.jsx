import React from "react";
import Banner from "./Banner";
import img2 from "../images/about.png";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
export default function Aboutus() {
  return (
    <div id="about">
      <Banner title="About Us" />
      <div className="container about">
        <div className="row py-3">
          <div className="col-md-6 text-center">
            <Fade left>
              <img
                src={img2}
                alt=""
                srcSet={img2}
                className="img-fluid mb-2 about-img"
              />
            </Fade>
          </div>

          <div className="col-md-6 my-3">
            <Fade right>
              <h2>Hello i am Akshay Dhongade,</h2>
              <p>
                {" "}
                I like to work on different skills like:
                <ul>
                  <li>Software Development</li>
                  <li>MERN Stack Development</li>
                  <li>UI/UX designing</li>
                  <li>AWS Services</li>
                  <li>Teaching-(Sharing Knowledge with others)</li>
                  <li>Freelancing</li>
                </ul>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
