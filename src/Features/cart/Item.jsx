import { Cross } from "lucide-react";
import Update from "../../Components/Update";
import Spinner from "../../Components/Spinner";
import { useDispatch } from "react-redux";
import { remove } from "./cartSlice";
import { useState } from "react";
import { deleteFromCart } from "../../Service/apiCart";

function Item({ item, toggleSelectItem }) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="flex items-center justify-between h-24 px-5 bg-black border-2 border-red-700">
			<input
				type="checkbox"
				checked={isChecked}
				className="scale-150 cursor-pointer accent-green-400"
				onChange={() => {
					setIsChecked(!isChecked);
					toggleSelectItem(item);
				}}
			/>
			<div className="flex items-center justify-center w-32 h-full bg-green-200 overscroll-hidden">
				<img className="h-full " src={item.productImage} alt="" />
			</div>
			<div className="h-full bg-red-300 grow">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa
					omnis ullam aliquam animi cum laborum laudantium et placeat
					repudiandae!
				</p>
			</div>
			<div className="flex items-center justify-center h-full bg-blue-200">
				<Update productId={item._id} quantity={item.quantity} />
				{isLoading ? (
					<span className="scale-75">
						<Spinner />
					</span>
				) : (
					<Cross
						onClick={async () => {
							setIsLoading(true);
							await deleteFromCart(item._id);
							setIsLoading(false);
							dispatch(remove(item._id));
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default Item;
