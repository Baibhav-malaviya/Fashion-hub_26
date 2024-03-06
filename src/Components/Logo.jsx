import { Heart, ListOrdered, Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Logo({ menu = false }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSetting = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	if (!menu)
		return (
			<Link
				to={"/"}
				className="flex items-center justify-center space-x-2 text-black transition-all sm:static hover:-rotate-1 hover:scale-105"
			>
				<img className="w-8 h-8 rounded-xl" src="/Logo.jpg" alt="" />
				<p className="text-2xl hidden sm:block font-bold bg-gradient-to-r from-stone-900 via-[#FFD95A]  to-stone-500 text-transparent bg-clip-text">
					VogueLane
				</p>
			</Link>
		);

	console.log(isOpen, " : isOpen");
	return (
		<>
			<Link
				to={"/"}
				className="flex items-center justify-center space-x-2 text-black transition-all sm:static hover:-rotate-1 hover:scale-105"
			>
				<img
					className="w-8 h-8 rounded-xl hover:rotate-1 hover:scale-95"
					src="/Logo.jpg"
					alt=""
					onClick={(e) => toggleSetting(e)}
				/>
				<p className="text-2xl hidden sm:block font-bold bg-gradient-to-r from-stone-900 via-[#FFD95A]  to-stone-500 text-transparent bg-clip-text">
					VogueLane
				</p>
			</Link>
			{isOpen && (
				<div className="absolute top-0 left-0 z-20 w-64 px-4 py-6 space-y-2 bg-white shadow-lg">
					<div className="flex justify-between mb-6 ">
						<span className="scale-75 ">
							<Logo />
						</span>
						<span
							className=" p-[3px] rounded cursor-pointer hover:bg-gray-300 ring-gray-300 ring-[1.5px]"
							onClick={(e) => toggleSetting(e)}
						>
							<Plus className="rotate-45 text-red-500/70" />
						</span>
					</div>

					<Row to={"order"}>
						<ListOrdered /> <span>Your Order</span>
					</Row>

					<Row to={"wishlist"}>
						<Heart /> <span> Wishlist</span>
					</Row>

					<Row to="/store">
						<ShoppingBasket /> <span> Your Cart</span>
					</Row>
				</div>
			)}
		</>
	);
}

export default Logo;

const Row = ({ children, to = "/" }) => {
	return (
		<NavLink
			to={to}
			className="flex items-center p-2 space-x-2 bg-gray-300 rounded cursor-pointer hover:bg-yellow-100 justify-left"
		>
			{children}
		</NavLink>
	);
};
