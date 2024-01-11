import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoutes from './components/PrivateRoute/PrivateRoutes';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<React.Fragment>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/dashboard"
							element={
								<PrivateRoutes>
									<Dashboard />
								</PrivateRoutes>
							}
						/>
					</Routes>
				</React.Fragment>
			</Router>
		</div>
	);
};

export default App;
