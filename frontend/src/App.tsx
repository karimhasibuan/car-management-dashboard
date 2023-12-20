import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
};

export default App;
