import { Minus, Plus } from "lucide-react";

import {
	decreaseItemQuantity,
	increaseItemQuantity,
} from "../Features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../Service/apiCart";
import { useState } from "react";
import WaveLoader from "../Components/WaveLoader";

function Update({ productId, quantity }) {
	const [deleting, setDeleting] = useState(false);
	const dispatch = useDispatch();
	if (deleting) return <WaveLoader />;
	return (
		<div className="flex gap-4 text-stone-200">
			<Minus
				className="p-[2px] text-black rounded-full bg-gray-200 shadow-lg cursor-pointer"
				onClick={async () => {
					if (quantity === 1) {
						setDeleting(true);
						await deleteFromCart(productId);
						setDeleting(false);
					}
					dispatch(decreaseItemQuantity(productId));
				}}
			/>
			{/* <button
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
			</button> */}
			<span className="font-mono text-xl font-semibold text-stone-900">
				{quantity}
			</span>
			{/* <button
				className="inline px-2  text-2xl py-[1px] rounded-full bg-stone-900"
				onClick={() => {
					console.log("Clicked increase");
					dispatch(increaseItemQuantity(productId));
				}}
			>
				+
			</button> */}
			<Plus
				className="p-[2px] text-black rounded-full bg-gray-200 shadow-lg cursor-pointer"
				onClick={() => {
					console.log("Clicked increase");
					dispatch(increaseItemQuantity(productId));
				}}
			/>
		</div>
	);
}

export default Update;
