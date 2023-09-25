import React from "react";
import myImage from "./assets/Tech_Stack2.png";

function LocalImage() {
  // Specify the relative path to your local image in the public directory

  return (
    <div>
      <h1>Anticipated Tech Stack</h1>
      <img
        src={myImage}
        alt="Description of the image"
        width={600}
        height={300}
      />
      <b> @#&$ </b>
    </div>
  );
}

export default LocalImage;
