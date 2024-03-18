const BASE_URL = "https://voguelane.onrender.com/api";

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

export async function checkout(amount = 2000) {
	try {
		const response = await fetch(`${BASE_URL}/payment/checkout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ amount }),
		});
		const data = await response.json();
		const order = data?.data;
		console.log(order);

		var options = {
			key: "rzp_test_PFvjXRn6jQEwTe", // Enter the Key ID generated from the Dashboard
			amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: "INR",
			name: "VogueLine",
			description: "A platform where you get your all stylish products",
			image: "public/product-5.png",
			order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			callback_url: `${BASE_URL}/payment/paymentVerification`,
			prefill: {
				name: "Gaurav Kumar",
				email: "gaurav.kumar@example.com",
				contact: "7323913924",
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#fffb",
			},
		};
		var razor = new window.Razorpay(options);
		razor.open();
		//todo __  Here we will add the async-await func to clear the cart(or may be only the selected items);
		return order;
	} catch (error) {
		console.log("Error in checking out: ", error.message);
	}
}
