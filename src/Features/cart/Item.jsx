import React from "react";
import PropTypes from "prop-types";
import { Plus } from "lucide-react";
import Update from "../../Components/Update";
import Spinner from "../../Components/Spinner";
import { useDispatch } from "react-redux";
import { remove } from "./cartSlice";
import { useState } from "react";
import { deleteFromCart } from "../../Service/apiCart";
import { formatCurrency, formatName } from "../../Utils/helper";
import WaveLoader from "../../Components/WaveLoader";

const Item = ({ item, toggleSelectItem }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="flex flex-col justify-between p-4 border-b border-gray-300 md:flex-row md:items-stretch md:border-none md:shadow-md md:rounded-md md:mb-4">
			<div className="flex items-center w-full mb-4 md:w-1/2 md:mb-0">
				<div className="relative flex items-center w-32 h-full border-r-[1.5px] overscroll-hidden">
					<input
						type="checkbox"
						checked={isChecked}
						className="absolute scale-105 cursor-pointer accent-gray-400 top-2 left-2"
						onChange={() => {
							setIsChecked(!isChecked);
							toggleSelectItem(item);
						}}
					/>
					<img className="h-full" src={item.productImage} alt="" />
				</div>
				<div className="pl-4 overflow-hidden">
					<h3 className="text-base font-semibold truncate md:text-lg">
						{formatName(item.name)}
					</h3>
					<p className="text-sm text-gray-600 md:text-base line-clamp-2">
						{item.description}
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between w-full md:w-1/2">
				<div className="mb-4 text-sm font-bold text-center md:text-base md:mb-0">
					{formatCurrency(item.price)}
				</div>
				<div className="flex items-center justify-center mb-4 md:mb-0">
					<Update productId={item._id} quantity={item.quantity} />
				</div>

				<div className="flex items-center justify-end">
					<button
						onClick={async () => {
							setIsLoading(true);
							await deleteFromCart(item._id);
							setIsLoading(false);
							dispatch(remove(item._id));
						}}
						className="px-4 py-2 text-white transition-colors duration-300 bg-red-500 rounded-md hover:bg-red-600"
					>
						{isLoading ? <WaveLoader message="Deleting" /> : "Delete"}
					</button>
				</div>
			</div>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		productImage: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
	toggleSelectItem: PropTypes.func.isRequired,
};

export default Item;
