
import React from 'react';

function LocalImage() {
  // Specify the relative path to your local image in the public directory
  const imageUrl = window.location.origin + '/assets/Tech_Stack2.png';

  return (
    <div>
      <h1>Local Image Example</h1>
      <img src={imageUrl} alt="Description of the image"
      width={300}
      height={200} />
    </div>
  );
}


export default LocalImage;