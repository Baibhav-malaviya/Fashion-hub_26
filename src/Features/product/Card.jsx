import { useDispatch, useSelector } from "react-redux";
import { formatName, formatCurrency } from "../../Utils/helper";
import { add } from "../cart/cartSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../../Service/apiCart";
import {
	add as addToWishlist,
	remove as removeFromWishlist,
} from "../wishlist/wishlistSlice";
import {
	addToWishlist as addToWishlistApi,
	deleteFromWishList,
} from "../../Service/apiWishlist";
import { Heart } from "lucide-react";
import { useState } from "react";

function Card({ product }) {
	// const product = {
	// 	_id: "65b61ab2f41e8d3ce0764f9e",
	// 	category: "fashion",
	// 	createdAt: "2024-01-28T09:13:22.557Z",
	// 	description:
	// 		"this is a half sleeve t-shirt for professional, just for testing",
	// 	name: "t-shirt",
	// 	price: 289,
	// 	productImage:
	// 		"http://res.cloudinary.com/baibhavmalaviya/image/upload/v1706433200/qidxcelpoexmsc7avqi6.webp",
	// 	reviews: [],
	// 	stock: 30,
	// 	tags: ["t-shirt", "half-sleeve", "cotton"],
	// 	updatedAt: "2024-01-28T09:13:22.557Z",
	// };
	const [isLoading, setIsLoading] = useState(false);

	const cart = useSelector((state) => state.cart.cart);
	const wishlist = useSelector((state) => state.wishlist.wishlist);

	const alreadyAddedToCart = cart.some((item) => item._id === product._id);
	const alreadyAddedToWishlist = wishlist.some(
		(item) => item._id === product._id
	);

	const dispatch = useDispatch();
	const handleAddToCart = async (item) => {
		setIsLoading(true);
		await addToCart(1, product._id);
		setIsLoading(false);
		dispatch(add(item));
	};
	return (
		<div
			className={`relative inline-flex flex-col justify-between h-64 gap-2 p-2 rounded-sm shadow-sm w-52 shadow-stone-600 hover:cursor-pointer ${
				isLoading && "scale-95 blur-sm"
			}`}
		>
			<div>
				<img src={product.productImage} className="w-[170px]" alt="" />
			</div>
			<div>
				<div className="flex items-center justify-between my-2">
					<p className="font-bold">{formatName(product.name)}</p>
					{alreadyAddedToCart ? (
						<Link
							to={"/cart"}
							className="p-[6px] px-2 hover:scale-105 transition-all  text-xs font-bold bg-yellow-500 rounded"
						>
							Go to cart
						</Link>
					) : (
						<button
							className="p-[6px] px-2 hover:scale-105 transition-all  text-xs font-bold bg-yellow-500 rounded"
							onClick={() => handleAddToCart({ ...product, quantity: 1 })}
						>
							Add to Cart
						</button>
					)}
				</div>
				<div className="flex items-center justify-start space-x-2">
					<span className="font-semibold line-through text-stone-500">
						{formatCurrency(product.price * 1.2)}
					</span>
					<span className="text-sm">20% Off</span>
					<span className="font-semibold">{formatCurrency(product.price)}</span>
				</div>
				{alreadyAddedToWishlist ? (
					<Heart
						fill="red"
						className="absolute text-red-500 top-2 right-2 hover:scale-105"
						onClick={async () => {
							setIsLoading(true);
							await deleteFromWishList(product._id);
							setIsLoading(false);
							dispatch(removeFromWishlist(product._id));
						}}
					/>
				) : (
					<Heart
						className="absolute top-2 right-2 hover:scale-105"
						onClick={async () => {
							setIsLoading(true);
							await addToWishlistApi(product._id);
							setIsLoading(false);
							dispatch(addToWishlist(product));
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default Card;
