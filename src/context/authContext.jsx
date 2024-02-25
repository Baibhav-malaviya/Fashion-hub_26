/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { isLoggedIn } from "../Service/auth";
import { logout as performLogout } from "../Service/apiUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(null);
	useEffect(() => {
		(async () => {
			setLoggedIn(await isLoggedIn());
		})();
	}, []);

	console.log("loggedIn in auth context: ", loggedIn);

	const login = () => {
		setLoggedIn(true);
	};

	const logout = async () => {
		await performLogout();
		setLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ loggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export const useAuth = () => useContext(AuthContext);
