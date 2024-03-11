import PropTypes from "prop-types";
import { checkout } from "../../Service/apiPayment";
// import AddressForm from "../Features/cart/AddressForm";
import AddressForm from "../../Features/cart/AddressForm";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit } from "lucide-react";
import { formatCurrency } from "../../Utils/helper";
import { createOrder } from "../../Service/apiOrders";
import { clearCart } from "./cartSlice";

function Checkout() {
	const [deliveryAddress, setDeliveryAddress] = useState("");
	const { cart, status } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const cartToOrder = cart.map((item) => ({
		id: item._id,
		quantity: item.quantity,
		price: item.price,
	}));
	const [creatingOrder, setCreatingOrder] = useState(false);
	const navigate = useNavigate();

	const addressLines = deliveryAddress.split(", ");
	// console.log("Checkout: ", deliveryAddress);

	console.log(cart);
	const totalAmount = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const handleSaveAddress = (address) => {
		setDeliveryAddress(address);
	};
	//!function for handle checkout
	const checkoutHandler = async (amount) => {
		// {
		//      products:[{id, quantity, price},...]
		//      shippingAddress: "Chitkara University, Rajpura, Punjab"
		// }
		setCreatingOrder(true);
		await createOrder(cartToOrder, deliveryAddress);
		const orderDetail = await checkout(amount);
		dispatch(clearCart());
		setCreatingOrder(false);
		// console.log("ORDER DETAIL: ", orderDetail);
	};

	if (status === "loading") return <Loader />;

	return (
		<div className="w-full ">
			{deliveryAddress !== "" ? (
				<div>
					<div className="flex justify-between">
						<ArrowLeft
							size={40}
							className="p-2 my-4 bg-gray-200 rounded shadow-lg cursor-pointer"
							onClick={() => navigate(-1)}
						/>
						<span
							className="flex items-center justify-center p-2 my-4 space-x-2 bg-gray-200 rounded shadow-lg cursor-pointer"
							onClick={() => setDeliveryAddress("")}
						>
							<Edit />
							Edit Address
						</span>
					</div>
					<div className="p-4 bg-gray-100 rounded-md ">
						<p className="text-xs bg-yellow-100 opacity-75">
							**Your name and mobile is taken from your Account
						</p>
						<h2 className="mb-2 text-lg font-semibold">Shipping Address</h2>
						<div className="flex p-2 space-x-2 text-gray-500 bg-white rounded">
							{addressLines.map((line, index) => (
								<p key={index} className="mb-1">
									{line}
								</p>
							))}
						</div>
					</div>
					<div className="font-semibold font-cutive-mono">
						<span>Total amount to pay: </span>
						<span className="font-sans font-bold ">
							{formatCurrency(totalAmount)}
						</span>
					</div>
					<button
						className="w-full h-auto p-2 bg-blue-500 rounded"
						onClick={() => checkoutHandler(Number(totalAmount))}
					>
						{creatingOrder ? "Order creating..." : "Checkout"}
					</button>
				</div>
			) : (
				<AddressForm onSubmit={handleSaveAddress} />
			)}
		</div>
	);
}

Checkout.propTypes = {
	deliveryAddress: PropTypes.string,
	cart: PropTypes.object,
};

export default Checkout;
