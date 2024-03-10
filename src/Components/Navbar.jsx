import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
function Navbar() {
	const { loggedIn } = useAuth();

	return (
		<nav className="flex items-center justify-center font-semibold space-x-7">
			<NavLink to={"/store"} className="hover:text-black hover:scale-105">
				Store
			</NavLink>
			<NavLink to={"/"} className="hover:text-black hover:scale-105">
				Home
			</NavLink>
			<NavLink to={"blog"} className="hover:text-black hover:scale-105">
				Blog
			</NavLink>
			{loggedIn && (
				<NavLink to={"cart"} className="hover:text-black hover:scale-105">
					Cart
				</NavLink>
			)}
		</nav>
	);
}

export default Navbar;
