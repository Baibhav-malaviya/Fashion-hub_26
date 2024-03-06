const BASE_URL = "http://localhost:8000/api";

export async function addToWishlist(id, quantity = 1) {
	try {
		const response = await fetch(`${BASE_URL}/wishlist/add/${id}`, {
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
		console.log("Error in addToWishlist: ", error.message);
	}
}

export async function deleteFromWishList(id) {
	try {
		const response = await fetch(`${BASE_URL}/wishlist/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		const data = await response.json();
		console.log(data);
		return data?.data;
	} catch (error) {
		console.log("Error in deleteFromWishList: ", error.message);
	}
}

export async function getWishList() {
	try {
		const response = await fetch(`${BASE_URL}/wishlist`, {
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
		console.log("Error in getWishList: ", error.message);
	}
}
