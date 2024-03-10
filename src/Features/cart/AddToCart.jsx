import { useDispatch } from "react-redux";
import { add } from "../cart/cartSlice";
import { addToCart } from "../../Service/apiCart";

function AddToCart({ product, setIsLoading }) {
	const dispatch = useDispatch();
	const handleAddToCart = async (item) => {
		setIsLoading(true);
		await addToCart(1, item._id);
		setIsLoading(false);
		dispatch(add(item));
	};
	return (
		<button
			className="p-[6px] px-2 hover:scale-105 transition-all  text-xs font-bold bg-yellow-500 rounded"
			onClick={() => handleAddToCart({ ...product, quantity: 1 })}
		>
			Add to Cart
		</button>
	);
}

export default AddToCart;
