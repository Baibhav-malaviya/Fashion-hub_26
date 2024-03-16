const BASE_URL = "/api";

export async function login(email, password) {
	const response = await fetch(`${BASE_URL}/user/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// Add any other headers as needed
		},
		credentials: "include", // Equivalent to Axios withCredentials: true
		body: JSON.stringify({ email, password }),
	});
	const data = await response.json();
	console.log(data?.data);
	return data;
}

export async function logout() {
	try {
		const response = await fetch(`${BASE_URL}/user/logout`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer yourAccessToken",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log("Error in logout : " + error.message);
	}
}

export async function getUser() {
	const response = await fetch(`${BASE_URL}/user/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer yourAccessToken",
		},
		credentials: "include",
	});
	const data = await response.json();
	console.log("RESPONSE: ", data);
	return data?.data;
}
