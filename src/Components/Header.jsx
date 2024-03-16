/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getUser } from "../Service/apiUser";
import Navbar from "./Navbar";
import { Heart, LogIn, LogOut, Menu, Plus, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useSelector } from "react-redux";
import { fetchCartData } from "../Features/cart/cartSlice";
import { fetchWishlistData } from "../Features/wishlist/wishlistSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../Cache/cacheUser";
import { deleteUser } from "../Cache/cacheUser";

function Header() {
	const user = useLoaderData(); //!Currently logged in user
	console.log("USER IN THE HEADER: ", user);
	const { loggedIn, logout } = useAuth();
	const navigate = useNavigate();
	const [isHidden, setIsHidden] = useState(true);
	// {"userName" in user.data && <div>This is profile</div>}
	const cartLength = useSelector((state) => state.cart.cart.length);
	const wishlistLength = useSelector((state) => state.wishlist.wishlist.length);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
		dispatch(fetchWishlistData());
	}, [dispatch]);

	return (
		<div className="p-4 relative border-black border-b-[1px] flex flex-row items-center justify-between font-semibold text-stone-500 ">
			<Logo menu={true} />
			<Navbar />
			<div
				className={`m-0 items-start sm:items-center h-auto absolute sm:static right-0 px-10 py-5 sm:py-0 sm:px-0 top-5 bg-white border-b-2 border-l-2 sm:border-0 z-20 justify-between sm:justify-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex ${
					isHidden ? "hidden" : "flex flex-col"
				}`}
			>
				{loggedIn && (
					<Link to={"/wishlist"} className="relative">
						<span>
							<Heart className="hover:text-black" />
							{wishlistLength > 0 && (
								<span className="absolute p-[1.5px] px-[5px] text-sm z-10 bg-white shadow-md text-red-500 rounded-full -right-3 -top-3 font-bold">
									{wishlistLength}
								</span>
							)}
						</span>
					</Link>
				)}

				{loggedIn && (
					<Link to={"/cart"} className="relative">
						<span>
							<ShoppingBag className="hover:text-black" />
							{cartLength > 0 && (
								<span className="absolute p-[1.5px] px-[5px] text-sm z-10 bg-white shadow-md text-red-500 rounded-full -right-3 -top-3 font-bold">
									{cartLength}
								</span>
							)}
						</span>
					</Link>
				)}

				<Link to={"contact"} className="font-semibold hover:text-black ">
					Contact us
				</Link>

				{loggedIn ? (
					<span
						className="flex items-center justify-center p-[5px] hover:text-black hover:cursor-pointer  space-x-2 border-[1.5px] rounded border-stone-800"
						onClick={async () => {
							logout();
							localStorage.removeItem("isLoggedIn");
							await deleteUser();
							navigate("/");
						}}
					>
						<LogOut className="font-semibold " /> <span>Logout</span>
					</span>
				) : (
					<Link
						to={"/signin"}
						className="flex items-center justify-center p-[5px] hover:text-black hover:cursor-pointer  space-x-2 border-[1.5px] rounded border-stone-800"
					>
						<LogIn className="font-semibold hover:cursor-pointer hover:text-black" />
						<span>Login</span>
					</Link>
				)}
			</div>
			{isHidden ? (
				<Menu
					className="block sm:hidden hover:cursor-pointer"
					onClick={() => setIsHidden(false)}
				/>
			) : (
				<Plus
					className="z-30 rotate-45 hover:cursor-pointer"
					onClick={() => setIsHidden(true)}
				/>
			)}
		</div>
	);
}

export default Header;

export const loader = async () => {
	const user = (await getUserData()) || (await getUser());
	if (user) return user;
	return null;
};
