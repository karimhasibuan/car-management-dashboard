// import React from "react";
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }: { children: ReactNode }) {
	const token = localStorage.getItem('token');
	return <>{token ? children : <Navigate to="/login" />}</>;
}
