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
      <div>
        <p> Our MVP is going to be a mental journaling app geared towards CS students which contains components from the Chat GPT to provide AI-generated conversation. Users will be able to document their emotions, experience, and feelings, in which that will help the AI to provide feedback towards that user. </p>
      </div>
    </div>
  );
}

export default LocalImage;
