import { getUser } from "./apiUser";
import { getUserData } from "../Cache/cacheUser";

export const isLoggedIn = async () => {
	const user = await getUser();
	const user2 = await getUserData();
	console.log("User in the auth isLoggedIn: ", user2);
	return !!user;
};
