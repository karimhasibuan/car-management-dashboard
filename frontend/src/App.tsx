import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage/LandingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
};

export default App;
