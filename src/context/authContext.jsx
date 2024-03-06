/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { logout as performLogout } from "../Service/apiUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(
		!!localStorage.getItem("isLoggedIn")
	);

	const login = () => {
		localStorage.setItem("isLoggedIn", true);
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
