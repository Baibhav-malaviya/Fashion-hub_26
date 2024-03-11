import { Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../Utils/helper";
import { deleteFromWishList } from "../../Service/apiWishlist";
import { useState } from "react";
import Spinner from "../../Components/Spinner";
import { remove } from "../wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../cart/AddToCart";
import { Link } from "react-router-dom";

function Card({ item }) {
	const [deleting, setDeleting] = useState(false);
	const [adding, setAdding] = useState(false);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);
	const alreadyAddedToCart = cart.some((el) => el._id === item._id);
	// const item = {
	// 	name: "BAt",
	// 	price: 200,
	// };
	return (
		<div>
			<div className="flex flex-col flex-shrink w-full h-auto overflow-hidden transition-all bg-gray-100 rounded shadow-md sm:w-80">
				<div className="w-full overflow-hidden aspect-video">
					<img src={item.productImage} className="h-full mx-auto" alt="" />
				</div>
				<div className="flex items-center justify-between p-2 py-4 bg-gray-300">
					<span>{item.name}</span>
					<span className="font-bold">{formatCurrency(item.price)}</span>
					{deleting ? (
						<span className="scale-75 ">
							<Spinner />
						</span>
					) : (
						<span
							className="cursor-pointer"
							onClick={async () => {
								setDeleting(true);
								await deleteFromWishList(item._id);
								dispatch(remove(item._id));
								setDeleting(false);
							}}
						>
							<Trash2 className="font-bold text-red-600 hover:text-red-700" />
						</span>
					)}
					{!alreadyAddedToCart ? (
						adding ? (
							<span className="px-2 py[3px] rounded bg-gray-400">Adding</span>
						) : (
							<AddToCart product={item} setIsLoading={setAdding} />
						)
					) : (
						<Link
							to={"/cart"}
							className="p-[6px] px-2 hover:scale-105 transition-all  text-xs font-bold bg-yellow-500 rounded"
						>
							Go to cart
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	item: PropTypes.object,
};

export default Card;
