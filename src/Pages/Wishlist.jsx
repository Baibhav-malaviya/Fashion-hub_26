import { useSelector } from "react-redux";
import Card from "../Features/wishlist/Card";
import Loader from "../Components/Loader";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

function Wishlist() {
	const { status, wishlist } = useSelector((state) => state.wishlist);

	if (status === "loading") return <Loader />;

	if (wishlist.length === 0)
		return (
			<div className="my-20 space-y-5 ">
				<Logo />
				<div className="flex items-center justify-center space-x-2">
					<span className="text-lg">Nothing in the wishlist </span>
					<Link
						to={"/store"}
						className="p-2 px-3 font-semibold bg-yellow-300 rounded hover:bg-yellow-400"
					>
						Add Now
					</Link>
				</div>
			</div>
		);
	return (
		<div>
			<div className="flex flex-wrap justify-between gap-2 md:px-20">
				{wishlist.map((item) => (
					<Card item={item} key={item._id} />
				))}
			</div>
		</div>
	);
}

export default Wishlist;
