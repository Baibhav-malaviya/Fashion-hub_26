const BASE_URL = "http://localhost:8000/api";

export async function addProduct(product) {
	//   const postData = { name, description, price, stock, category, tags, productImage };
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Add any other headers as needed
			},
			credentials: "include", // Equivalent to Axios withCredentials: true
			body: JSON.stringify(product),
		});
		const data = await response.json();
		console.log(data);
		return data.data;
	} catch (error) {
		console.log("Error in addProduct: ", error.message);
	}
}
export async function fetchAllProducts() {
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer yourAccessToken",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data.data;
	} catch (error) {
		console.log("Error in getAllProducts: " + error);
	}
}

export async function getProductById(id) {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer yourAccessToken",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data.data;
	} catch (error) {
		console.log("Error in getProductById: " + error.message);
	}
}

export async function deleteProductById(id) {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer yourAccessToken",
			},
			credentials: "include",
		});
		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in deleteProductById: " + error.message);
	}
}
