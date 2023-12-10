import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Landing Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default LandingPage;