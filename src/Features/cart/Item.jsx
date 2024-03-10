import { Plus, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import Update from "../../Components/Update";
import Spinner from "../../Components/Spinner";
import { useDispatch } from "react-redux";
import { remove } from "./cartSlice";
import { useState } from "react";
import { deleteFromCart } from "../../Service/apiCart";
import { formatCurrency, formatName } from "../../Utils/helper";

function Item({ item, toggleSelectItem }) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="flex items-center justify-between h-24 pr-5 shadow-md ">
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
				<img className="h-full " src={item.productImage} alt="" />
			</div>

			<div className="text-xl">{formatName(item.name)}</div>

			<div className="font-bold">{formatCurrency(item.price)}</div>

			<Update productId={item._id} quantity={item.quantity} />

			<div className="flex items-center justify-center font-bold">
				{" "}
				{item.quantity}{" "}
				<span>
					<Plus className="mx-4 rotate-45" />
				</span>{" "}
				{formatCurrency(item.quantity * item.price)}
			</div>
			{isLoading ? (
				<span className="scale-75">
					<Spinner />
				</span>
			) : (
				<Trash2
					onClick={async () => {
						setIsLoading(true);
						await deleteFromCart(item._id);
						setIsLoading(false);
						dispatch(remove(item._id));
					}}
					// fill="red"
					className="font-light text-red-500 hover:cursor-pointer hover:opacity-60"
				/>
			)}
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.object,
	toggleSelectItem: PropTypes.func,
};

export default Item;
