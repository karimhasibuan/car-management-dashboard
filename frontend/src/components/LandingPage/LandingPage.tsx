import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../Navbar/Navbar";
import JumbotronComponent from "../Jumbotron/Jumbotron";

const LandingPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent />
    </div>
  );
};

export default LandingPage;