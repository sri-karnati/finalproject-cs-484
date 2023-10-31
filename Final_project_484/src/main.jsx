// main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome.jsx";
import Journal from "./Journal.jsx"; // Ensure you've imported the Journal component
import "./global.css";

function MainApp() {
  const [showJournal, setShowJournal] = useState(false);

  return (
    <div className="app-container">
      {showJournal ? (
        <Journal onGoBackClick={() => setShowJournal(false)} />
      ) : (
        <Welcome onDiaryClick={() => setShowJournal(true)} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
