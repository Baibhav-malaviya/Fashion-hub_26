import { useSelector } from "react-redux";
import Item from "../Features/cart/Item";
import Spinner from "../Components/Spinner";

function Wishlist() {
	const { status, wishlist } = useSelector((state) => state.wishlist);

	if (status === "loading") return <Spinner />;
	return (
		<div>
			This is Wishlist page
			<div>
				{wishlist.map((item) => (
					<Item item={item} key={item._id} />
				))}
			</div>
		</div>
	);
}

export default Wishlist;
