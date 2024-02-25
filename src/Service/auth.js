import { getUser } from "./apiUser";

export const isLoggedIn = async () => {
	const user = await getUser();
	// console.log("User in the auth isLoggedIn: ", !!user);
	return !!user;
};
