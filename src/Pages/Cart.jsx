import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import Item from "../Features/cart/Item";
import Logo from "../Components/Logo";
import Loader from "../Components/Loader";
import { formatCurrency } from "../Utils/helper";

function Cart() {
	const { cart, status } = useSelector((state) => state.cart);
	const [selectedItems, setSelectedItems] = useState(cart);
	const totalAmount = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	console.log("CART: ", cart);
	console.log("SELECTED: ", selectedItems);
	// Function to toggle the selection of an item
	const toggleSelectItem = (item) => {
		if (selectedItems.includes(item)) {
			setSelectedItems(selectedItems.filter((el) => el._id !== item._id));
		} else {
			setSelectedItems([...selectedItems, item]);
		}
	};

	// console.log("Delivery Address: ", deliveryAddress);

	// console.log("SELECTED ITEMS: ", selectedItems);
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
			<div className="flex flex-col p-4 ">
				<div className="flex flex-col w-full px-4 space-y-2 divide-y divide-gray-300 md:px-24">
					{cart.map((item) => (
						<Item
							item={item}
							toggleSelectItem={toggleSelectItem}
							key={item._id}
						/>
					))}
				</div>
				<div className="flex items-center justify-between px-24 my-2">
					<span className="font-semibold font-cutive-mono">
						<span>Total amount to pay: </span>
						<span className="font-sans font-bold">
							{formatCurrency(totalAmount)}
						</span>
					</span>
					<Link
						to={"/checkout"}
						className="p-2 px-6 text-sm font-semibold bg-blue-500 rounded"
					>
						Proceed
					</Link>
				</div>
			</div>
			{/* <div className="flex flex-col items-center justify-center m-0 space-x-6 md:flex-row md:mx-24">
				<Checkout cart={cart} />
			</div> */}
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Cart;
