import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../Navbar/Navbar";

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
    </div>
  );
};

export default LandingPage;
