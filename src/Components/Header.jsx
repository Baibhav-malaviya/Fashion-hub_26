/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getUser } from "../Service/apiUser";
import Navbar from "./Navbar";
import { Heart, LogIn, LogOut, Menu, Plus, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
// import { loggedIn, logout } from "../context/authContext";
import { useAuth } from "../context/authContext";

function Header() {
	const user = useLoaderData();
	const navigate = useNavigate();
	const { loggedIn, logout } = useAuth();
	console.log(loggedIn);
	console.log("User ", user);
	const [isHidden, setIsHidden] = useState(true);
	// {"userName" in user.data && <div>This is profile</div>}

	return (
		<div className="p-4 relative border-black border-b-[1px] flex flex-row items-center justify-between font-semibold text-stone-500 ">
			<Logo />
			<Navbar />
			<div
				className={`m-0 items-start sm:items-center h-auto absolute sm:static right-0 px-10 py-5 sm:py-0 sm:px-0 top-5 bg-white border-b-2 border-l-2 sm:border-0 z-20 justify-between sm:justify-center space-y-5 sm:space-y-0 sm:space-x-5 sm:flex ${
					isHidden ? "hidden" : "flex flex-col"
				}`}
			>
				<Link to={"/wishlist"}>
					<Heart className="hover:text-black" />
				</Link>
				<Link to={"/cart"}>
					<ShoppingBag className="hover:text-black" />
				</Link>
				<Link to={"contact"} className="font-semibold hover:text-black ">
					Contact us
				</Link>
				{loggedIn ? (
					<LogOut
						className="font-semibold hover:cursor-pointer hover:text-black"
						onClick={() => {
							logout();
							navigate("/");
						}}
					/>
				) : (
					<Link to={"/signin"}>
						<LogIn className="font-semibold hover:cursor-pointer hover:text-black" />
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
	const user = await getUser();
	if (user) return user;
	return null;
};
