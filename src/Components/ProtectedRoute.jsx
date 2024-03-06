import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
function ProtectedRoute({ Component }) {
	const { loggedIn } = useAuth();
	console.log("Logged in: protected route: ", loggedIn);
	const navigate = useNavigate();
	useEffect(() => {
		if (!loggedIn) navigate("/signin");
	}, [loggedIn, navigate]);

	return <Component />;
}

export default ProtectedRoute;
