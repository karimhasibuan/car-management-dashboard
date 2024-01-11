import React, { useState, useEffect } from 'react';



interface UserData {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	user: any;
    id: number;
    name: string;
    email: string;
}

const Dashboard: React.FC = () => {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		const API = 'http://localhost:3001/v1/users/profile';
		const token = localStorage.getItem('token');

		if (token) {
			fetch(API, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setUserData(data));
		} else {
			window.location.href = '/login';
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = '/login';
	};

	return (
		<div>
			<h1>Dashboard</h1>
			{userData ? (
				<div>
					<p>Selamat datang di dashboard, {userData.user?.name}!</p>
					<p>Email: {userData.user?.email}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}

			<button onClick={handleLogout}>LOGOUT</button>
		</div>
	);
};

export default Dashboard;
