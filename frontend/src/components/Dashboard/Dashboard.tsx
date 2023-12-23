import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/v1/users/profile";

interface UserProfile {
  user: Array<{
    name: string;
    email: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({ user: [] });

  useEffect(() => {
    if (!userProfile.user.length) {
      fetch(API, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserProfile(data));
      console.log(userProfile);
    }
  }, [userProfile]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {userProfile.user?.length > 0 &&
        userProfile.user?.map(({ name, email }) => {
          return (
            <div>
              <p>Selamat datang di dashboard, {name}!</p>
              <p>Email: {email}</p>
            </div>
          );
        })}

      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
