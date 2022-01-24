import React from "react";
import "./bio.scss";
export default function Bio() {
  return (
    <div className="Bio">
      <div className="caption caption-large">Bio</div>
      <div>{`I was born in Hong Kong in 1999 and raised all along by my family. 

      In 2017, when I was 18, I got into The Chinese University of Hong Kong as an engineering student.

      Unfortunately, I cannot choose my preferred major (Computer Science) and ended up as majoring in Mechanical and Automation Engineering.

      In 2021, which was the start of my final year in university, I picked up programming again as I have more spare time and I was obsessed with web development.

      And now, in 2022, I am beginning my software developer journey.

      I just want to say "Never too late" and follow your heart.
      `}</div>
    </div>
  );
}
