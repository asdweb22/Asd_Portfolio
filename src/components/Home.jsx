import React from "react";
import img1 from "../images/asdphoto1.png";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import Resume from "../docs/Akshay_Dhongade_resume23.pdf";

export default function Home() {
  return (
    <div className="mainFrame text-white">
      <div className="container py-2 px-3 text-white">
        <div className="row">
          <div className="col-6 py-4 px-4 text-center">
            <h2>
              {" "}
              Hi I am
              <Typewriter
                options={{
                  strings: [
                    "React Developer",
                    " UI/UX Developer",
                    "MERN Stack Developer",
                    "Full Stack Developer",
                    "AWS Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <br />

            <a
              href={Resume}
              target="_blank"
              // download="Akshay_Dhongade_resume.pdf"
              className="btn btn-primary"
            >
              My Resume
            </a>
          </div>
          <div className="col-md-6 px-4 home-img-box text-center">
            <Fade right>
              <img
                src={img1}
                alt=""
                height={250}
                width={250}
                srcset=""
                className="img-fluid mb-2"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
