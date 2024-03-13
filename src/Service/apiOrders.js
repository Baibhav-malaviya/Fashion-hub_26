const BASE_URL = "https://voguelane.onrender.com/api";

export async function createOrder(products, shippingAddress) {
	//! This is the format of the order
	// {
	//      products:[{id, quantity, price},...]
	//      shippingAddress: "Chitkara University, Rajpura, Punjab"
	// }
	const postData = { products, shippingAddress };

	try {
		const response = await fetch(`${BASE_URL}/orders`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(postData),
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in createOrder: ", error.message);
	}
}

export async function getAllOrders() {
	try {
		const response = await fetch(`${BASE_URL}/orders`, {
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
		console.log("Error in getAllOrders: ", error.message);
	}
}

export async function getCurrentOrder() {
	try {
		const response = await fetch(`${BASE_URL}/orders/current`, {
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
		console.log("Error in getCurrentOrder: ", error.message);
	}
}

export async function getOrderById(id) {
	try {
		const response = await fetch(`${BASE_URL}/orders/${id}`, {
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
		console.log("Error in getOrderById: ", error.message);
	}
}
