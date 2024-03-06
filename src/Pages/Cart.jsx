import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";

import Item from "../Features/cart/Item";
import Spinner from "../Components/Spinner";
import AddressForm from "../Features/cart/AddressForm";

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
	if (status === "loading") return <Spinner />;
	return (
		<div>
			<div className="flex flex-col md:flex-row">
				<div>
					{cart.map((item) => (
						<Item
							item={item}
							toggleSelectItem={toggleSelectItem}
							key={item._id}
						/>
					))}
				</div>
				<div className="bg-pink-300 h-52 w-52"></div>
			</div>
			<AddressForm onSubmit={handleSaveAddress} />
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Cart;
