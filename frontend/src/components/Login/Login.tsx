import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Login Data:", { email, password });
      const response = await fetch("http://localhost:3001/v1/users/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login Failed: ", errorData.message);
        return;
      }

      const responseData = await response.json();
      const { token } = responseData;

      localStorage.setItem("token", token);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Login Failed: ", (error as Error)?.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
