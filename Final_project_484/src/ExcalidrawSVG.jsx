import React from 'react';

function LocalSVG() {
  // Specify the relative path to your local SVG in the public directory
  const svgPath ='/assets/Tech-Stack.svg';

  return (
    <div>
      <h1>Local SVG Example</h1>
      <object
        type="image/svg+xml"
        data={svgPath}
        aria-label="Local SVG Image"
      >
        Your browser does not support SVG
      </object>
    </div>
  );
}

export default LocalSVG;