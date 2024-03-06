import { Minus, Plus } from "lucide-react";

import {
	decreaseItemQuantity,
	increaseItemQuantity,
} from "../Features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../Service/apiCart";
import { useState } from "react";

function Update({ productId, quantity }) {
	const [deleting, setDeleting] = useState(false);
	const dispatch = useDispatch();
	if (deleting)
		return (
			<span className="p-2 font-semibold bg-gray-400 rounded-lg opacity-70">
				Deleting...
			</span>
		);
	return (
		<div className="flex gap-4 text-stone-200">
			<button
				className="inline px-2 py-[1px] text-2xl rounded-full bg-stone-900"
				onClick={async () => {
					if (quantity === 1) {
						setDeleting(true);
						await deleteFromCart(productId);
						setDeleting(false);
					}
					dispatch(decreaseItemQuantity(productId));
				}}
			>
				-
			</button>
			<span className="font-mono text-xl font-semibold text-stone-900">
				{quantity}
			</span>
			<button
				className="inline px-2  text-2xl py-[1px] rounded-full bg-stone-900"
				onClick={() => {
					console.log("Clicked increase");
					dispatch(increaseItemQuantity(productId));
				}}
			>
				+
			</button>
		</div>
	);
}

export default Update;
