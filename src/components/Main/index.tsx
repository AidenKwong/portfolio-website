import React from "react";
import "./main.scss";
import TechnicalSkills from "./TechnicalSkills";
import profilePic from "../../asset/image/profile_picture.jpg";
import Bio from "./Bio";

export default function Main() {
  return (
    <div id="main">
      <div className="introContainer">
        <img src={profilePic} style={{ maxHeight: "500px" }}></img>
        <h2 className="intro">
          {`I'm currently a student / software developer. 
          My major is Mechanical and Automation Engineering 
          BUT I ended up becoming a `}
          <span className="software-developer">software developer</span>
          {`.
          Let me bring you to the journey of my life.
          `}
        </h2>
      </div>
      <Bio />

      <TechnicalSkills />
    </div>
  );
}
