import React from 'react';

function ExcalidrawEmbed() {
  const excalidrawURL = 'https://excalidraw.com/#json=oAiPs-ZVSpqg6z_wKg2fT,xiG83jIT1yN-Fu-Drtvcxw';

  return (
    <div>
      <h1>Embedded Excalidraw Drawing</h1>
      <iframe
        src={excalidrawURL}
        title="Embedded Excalidraw"
        width="100%"
        height="400px" // Set the desired height
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ExcalidrawEmbed;
