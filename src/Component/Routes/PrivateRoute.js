import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div className="text-center mt-4 min-h-screen flex items-center justify-center">
				<div className="spinner-border text-orange-400 pt-60" role="status">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			</div>
		);
	}
	if (user && user.uid) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
