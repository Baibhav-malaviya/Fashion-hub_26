import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import Item from "../Features/cart/Item";
import AddressForm from "../Features/cart/AddressForm";
import Logo from "../Components/Logo";
import Loader from "../Components/Loader";
import Checkout from "../Features/cart/Checkout";

function Cart() {
	const { cart, status } = useSelector((state) => state.cart);
	const [selectedItems, setSelectedItems] = useState(cart);
	const [deliveryAddress, setDeliveryAddress] = useState("");
	// Function to toggle the selection of an item
	const toggleSelectItem = (item) => {
		if (selectedItems.includes(item)) {
			setSelectedItems(selectedItems.filter((el) => el._id !== item._id));
		} else {
			setSelectedItems([...selectedItems, item]);
		}
	};

	const handleSaveAddress = (address) => {
		setDeliveryAddress(address);
	};
	console.log("Delivery Address: ", deliveryAddress);

	console.log("SELECTED ITEMS: ", selectedItems);
	if (status === "loading") return <Loader />;

	if (cart.length === 0)
		return (
			<div className="my-20 space-y-5">
				<Logo />
				<div className="flex items-center justify-center space-x-2">
					<span className="text-lg">Your cart is empty </span>
					<Link
						to={"/store"}
						className="p-2 px-3 font-semibold bg-yellow-300 rounded hover:bg-yellow-400"
					>
						Shop Now
					</Link>
				</div>
			</div>
		);

	return (
		<div>
			<div className="flex flex-col p-4 md:flex-row ">
				<div className="flex flex-col w-full px-24 space-y-2 divide-y divide-gray-300">
					{cart.map((item) => (
						<Item
							item={item}
							toggleSelectItem={toggleSelectItem}
							key={item._id}
						/>
					))}
				</div>
			</div>
			<div className="flex flex-col items-center justify-center m-0 space-x-6 md:flex-row md:mx-24">
				<AddressForm onSubmit={handleSaveAddress} />
				<Checkout
					deliveryAddress={deliveryAddress}
					selectedItems={selectedItems}
				/>
			</div>
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Cart;
