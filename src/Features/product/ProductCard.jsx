import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { formatName, formatCurrency } from "../../Utils/helper";
// import { add } from "../cart/cartSlice";
import { Link } from "react-router-dom";
// import { addToCart } from "../../Service/apiCart";
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
import AddToCart from "../cart/AddToCart";

const ProductCard = ({ product }) => {
	const [isLoading, setIsLoading] = useState(false);

	const cart = useSelector((state) => state.cart.cart);
	const wishlist = useSelector((state) => state.wishlist.wishlist);
	const dispatch = useDispatch();
	const alreadyAddedToCart = cart.some((item) => item._id === product._id);
	const alreadyAddedToWishlist = wishlist.some(
		(item) => item._id === product._id
	);

	return (
		<div
			className={`bg-white rounded-lg shadow-md overflow-hidden ${
				isLoading && "scale-95 blur-sm"
			}`}
		>
			<div className="relative">
				<img
					src={product.productImage}
					alt={product.name}
					className="object-cover w-full h-64"
				/>
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
			<div className="p-4">
				<h2 className="mb-2 text-lg font-semibold">
					{formatName(product.name)}
				</h2>
				<div className="flex items-center justify-between">
					<span className="font-semibold text-yellow-600">
						{formatCurrency(product.price)}
					</span>
					<span className="text-gray-500 line-through">
						{formatCurrency(product.price * 1.2)}
					</span>
					<span className="px-2 py-1 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded">
						20% Off
					</span>
				</div>
				{alreadyAddedToCart ? (
					<Link
						to={"/cart"}
						className="p-[6px] px-2 hover:scale-105 transition-all  text-xs font-bold bg-yellow-500 rounded"
					>
						Go to cart
					</Link>
				) : (
					<AddToCart product={product} setIsLoading={setIsLoading} />
				)}
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
