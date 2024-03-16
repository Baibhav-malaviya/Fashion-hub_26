const BASE_URL = "/api";

export async function addToCart(quantity, id) {
	try {
		const response = await fetch(`${BASE_URL}/cart/add/${id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ quantity }),
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in addToCart: ", error.message);
	}
}

export async function deleteFromCart(id) {
	try {
		const response = await fetch(`${BASE_URL}/cart/remove/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.updatedCart;
	} catch (error) {
		console.log("Error in deleteFromCart: ", error.message);
	}
}

export async function getCart() {
	try {
		const response = await fetch(`${BASE_URL}/cart`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in getCart: ", error.message);
	}
}
