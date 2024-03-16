/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { logout as performLogout } from "../Service/apiUser";
import { getUserData } from "../Cache/cacheUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(
		!!localStorage.getItem("isLoggedIn")
	);

	const login = async () => {
		localStorage.setItem("isLoggedIn", true);
		const user2 = await getUserData();
		console.log("User in the authContext: ", user2);
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
