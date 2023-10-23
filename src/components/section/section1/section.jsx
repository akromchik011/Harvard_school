import React, { useInsertionEffect } from "react";
import "./section.css";
// import TypewriterComponent from "typewriter-effect";
import rightimage from "../images/teenager-student-girl-yellow-pointing-finger-side-copy-removebg-preview.png";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";
AOS.init();

function Section() {
  return (
    <div className="section1" id="hero">
      <div className="left" data-aos="fade-right">
        {/* <p>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Education is not the learning of facts, but the training of the mind to think. Education is the most powerful weapon which you can use to change the world"
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </p> */}

        <p>
          <Typewriter
            words={[
              `${"Education is not the learning of facts, but the training of the mind to think. Education is the most powerful weapon which you can use to change the world"}`,
            ]}
            autoStart={true}
            loop={true}
          />
        </p>
      </div>
      <div
        className="right"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="1000"
      >
        <img
          src={rightimage}
          className="rightimg"
          alt=""
          data-aos="fade-left"
        />
      </div>
    </div>
  );
}

export default Section;
