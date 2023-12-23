import React from "react";

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Selamat datang di dashboard!</p>

      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
